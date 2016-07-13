using Microsoft.ServiceFabric.Actors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;
using TicTacTechActors.Interfaces;
using Microsoft.ServiceFabric.Actors.Client;

namespace TicTacTechActors
{
    [DataContract]
    public class GameManagerData
    {
        [DataMember]
        public string Initiator;
    }

    
    public class GameManager :
        ActorWithStateObject<GameManagerData>, IGameManager
    {
        public async Task LetMePlay(IPlayer player)
        {
            var playerId = Player.GetId(player);

            if (State.Initiator == null)
            {
                State.Initiator = playerId;
                SaveState();
                await Task.FromResult(true);
            }
            else
            {
                var initiator = State.Initiator;
                State.Initiator = null;
                SaveState();
                await Game.CreateNew()
                    .StartGame(
                        Player.FromId(initiator),
                        Player.FromId(playerId));
            }
        }
        public static IGameManager Instance()
        {
            return ActorProxy.Create<IGameManager>(new ActorId("TicTacTechMgr"));
        }

    }




}
