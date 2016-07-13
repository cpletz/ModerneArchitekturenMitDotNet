using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.ServiceFabric.Actors.Runtime;

namespace TicTacTechActors
{
    public abstract class ActorWithStateObject<TState>  : Actor where TState : new()
    {
        const string STATE_NAME = "object_state";

        TState _state;
        bool _initialized;

        public TState State
        {
            get
            {

                if(!_initialized)
                {
                    _state = StateManager.GetOrAddStateAsync<TState>(STATE_NAME, new TState()).Result;
                    _initialized = true;
                }
                return _state;
            }
        }

        public void SaveState()
        {
            StateManager.AddOrUpdateStateAsync<TState>(STATE_NAME, _state, null);
        }
    }
}
