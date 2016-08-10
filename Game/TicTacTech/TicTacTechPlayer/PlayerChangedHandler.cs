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

        readonly StatefulService _service;
        readonly Resources _resources;

        public PlayerChangedHandler(StatefulService service)
        {
            _service = service;
            _resources = new Resources(service.StateManager);
        }

        public async Task ReceiveMessageAsync(BrokeredMessage message, CancellationToken cancellationToken)
        {
            ServiceEventSource.Current.ServiceMessage(_service, $"Handling subscription message {message.MessageId}");

            var playerJson = message.GetBody<string>();
            var player = JsonConvert.DeserializeObject<Player>(playerJson);

            var playerDictTask = _resources.GetPlayerDict();
            var messagesDictTask = _resources.GetReceivedMessagesDict();
            var playerDict = playerDictTask.Result;
            var messages = messagesDictTask.Result;

            await Task.WhenAll(playerDictTask, messagesDictTask);

            using (var tx = _service.StateManager.CreateTransaction())
            {
                var received = await messages.AddOrUpdateAsync(tx, message.MessageId, 1, (m, c) => c + 1);
                if (received == 1)
                {
                    var addRes = await playerDict.AddOrUpdateAsync(tx, player.playerId, playerJson, (o, n) => n);
                }
                await tx.CommitAsync();
                message.Complete();
            }
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
