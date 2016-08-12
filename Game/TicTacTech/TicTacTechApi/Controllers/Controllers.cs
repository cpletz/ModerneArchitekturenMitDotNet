using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.ServiceFabric.Services.Client;
using Microsoft.ServiceFabric.Services.Remoting.Client;
using TicTacTechPlayer.Interfaces;

namespace TicTacTechApi.Controllers
{
    public class PlayersController : ApiController
    {
        static readonly Uri PlayerServiceUri = new Uri("fabric:/TicTacTech/TicTacTechPlayer");
        static readonly ServicePartitionKey PlayerServicePartitionKey = new ServicePartitionKey(1L);
        static IPlayers GetPlayersProxy() =>
            ServiceProxy.Create<IPlayers>(PlayerServiceUri, PlayerServicePartitionKey);

        public async Task<IEnumerable<string>> Get() => 
            await GetPlayersProxy().GetPlayers();
    }

}
