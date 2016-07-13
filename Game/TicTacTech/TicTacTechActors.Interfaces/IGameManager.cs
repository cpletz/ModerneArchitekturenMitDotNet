using System.Threading.Tasks;
using Microsoft.ServiceFabric.Actors;

namespace TicTacTechActors.Interfaces
{
    public interface IGameManager : IActor      
    {
        Task LetMePlay(IPlayer player);
    }
}
