using Microsoft.ServiceFabric.Actors;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Services.Remoting;

namespace TicTacTechActors.Interfaces
{
    public interface IGameManager : IActor, IService      
    {
        Task LetMePlay(IPlayer player);
    }
}
