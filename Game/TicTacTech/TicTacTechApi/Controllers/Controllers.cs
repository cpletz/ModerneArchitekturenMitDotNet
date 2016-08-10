using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using Microsoft.ServiceFabric.Actors;
using Microsoft.ServiceFabric.Actors.Client;
using Microsoft.ServiceFabric.Services.Client;
using Microsoft.ServiceFabric.Services.Remoting.Client;
using TicTacTechActors.Interfaces;
using TicTacTechPlayer.Interfaces;

namespace TicTacTechApi.Controllers
{
    public class ValuesController : ApiController
    {
        public async Task<IEnumerable<string>> Get()
        {
            var playersService =
                ServiceProxy.Create<IPlayers>(new Uri("fabric:/TicTacTech/TicTacTechPlayer"), new ServicePartitionKey(1L));

            return await playersService.GetPlayers();
        }

        // POST api/values 
        public void Post([FromBody]string value)
        {
        }
    }


    public class JsonPlayer { public string id { get; set; } }

    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class GoAndPlayController : ApiController, IPlayerEvents
    {
        public void GameStarted(string otherPlayer, string yourRole)
        {
            //throw new NotImplementedException();
        }

        public void GameStateChanged(string cells, PlayerGameStatus status)
        {   
            //throw new NotImplementedException();
        }

        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        public async Task Post([FromBody]JsonPlayer value)
        {
            var player = ActorProxy.Create<IPlayer>(new ActorId(value.id), new Uri("fabric:/TicTacTech/PlayerActorService"));
            await Task.WhenAll(
                player.SubscribeAsync(this), 
                player.GoAndPlay());
        }
    }

}
