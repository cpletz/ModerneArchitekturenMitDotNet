using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Services.Remoting;

namespace TicTacTechPlayer.Interfaces
{
    public interface IPlayers : IService
    {
        Task<IEnumerable<string>> GetPlayers();
    }
}
