using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Data;
using Microsoft.ServiceFabric.Data.Collections;

namespace TicTacTechPlayer
{
    class Resources
    {
        const string PlayerDictName = "Players";
        const string ReceivedMessages = "ReceivedMessages";
        readonly IReliableStateManager _stateManager;

        public Resources(IReliableStateManager stateManager)
        {
            _stateManager = stateManager;                
        }

        public async Task<IReliableDictionary<string, string>> GetPlayerDict() =>
            await _stateManager.GetOrAddAsync<IReliableDictionary<string, string>>(PlayerDictName);
        

        public async Task<IReliableDictionary<string, int>> GetReceivedMessagesDict() =>
            await _stateManager.GetOrAddAsync<IReliableDictionary<string, int>>(ReceivedMessages);
    }
}
