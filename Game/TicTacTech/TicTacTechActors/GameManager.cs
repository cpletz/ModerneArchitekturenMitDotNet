using System.Runtime.Serialization;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Actors;
using Microsoft.ServiceFabric.Actors.Client;
using TicTacTechActors.Interfaces;

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
                if (initiator == playerId) return; // do not allow the same player twice
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
