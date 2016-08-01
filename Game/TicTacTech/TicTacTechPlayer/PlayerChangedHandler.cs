using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.ServiceBus.Messaging;
using Microsoft.ServiceFabric.Data.Collections;
using Microsoft.ServiceFabric.Services.Runtime;
using Newtonsoft.Json;
using ServiceFabric.ServiceBus.Services;

namespace TicTacTechPlayer
{

    internal sealed class PlayerChangedHandler : IServiceBusMessageReceiver
    {
        const string PlayerDictName = "Players";
        private readonly StatefulService _service;

        public PlayerChangedHandler(StatefulService service)
        {
            _service = service;
        }

        public async Task ReceiveMessageAsync(BrokeredMessage message, CancellationToken cancellationToken)
        {
            ServiceEventSource.Current.ServiceMessage(_service, $"Handling subscription message {message.MessageId}");

            var playerJson = message.GetBody<string>();
            var player = JsonConvert.DeserializeObject<Player>(playerJson);

            var playerDict = await GetPlayerDict();

            using (var tx = _service.StateManager.CreateTransaction())
            {

                var addRes = await playerDict.AddOrUpdateAsync(tx, player.playerId, playerJson, (o, n) => n);
                await tx.CommitAsync();
                //await message.CompleteAsync();
            }
        }

        async Task<IReliableDictionary<string, string>> GetPlayerDict()
        {
            return await _service.StateManager.GetOrAddAsync<IReliableDictionary<string, string>>(PlayerDictName);
        }
    }

    internal class Player
    {
        public string playerId { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
    }
}
