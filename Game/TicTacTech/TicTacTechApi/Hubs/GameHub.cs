using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.SignalR;
using Microsoft.ServiceFabric.Actors;
using Microsoft.ServiceFabric.Actors.Client;
using TicTacTechActors.Interfaces;

namespace TicTacTechApi.Hubs
{
    public class GameHub : Hub
    {

        class PlayerActorEventsListener : IPlayerEvents
        {
            string _playerId;
            string _signalRId;

            public PlayerActorEventsListener(string playerId, string signalRId)
            {
                _playerId = playerId;
                _signalRId = signalRId;
            }

            dynamic Client => GlobalHost.ConnectionManager.GetHubContext<GameHub>().Clients.Client(_signalRId);

            public void GameStarted(string otherPlayer, string yourRole)
            {
                Client.gameStarted(otherPlayer, yourRole);
            }

            public void GameStateChanged(string cells, PlayerGameStatus status)
            {
                Client.gameStateChanged(cells, status.ToString());
            }
        }


        static ConcurrentDictionary<string, Tuple<string, IPlayer, PlayerActorEventsListener>> s_players = new ConcurrentDictionary<string, Tuple<string, IPlayer, PlayerActorEventsListener>>();

        static IPlayer GetPlayerProxy(string playerId)
        {
            return ActorProxy.Create<IPlayer>(new ActorId(playerId), new Uri("fabric:/TicTacTech/PlayerActorService"));
        }

        static async Task<IPlayer> GetPlayer(string playerId, string signalRConnectionId)
        {
            Tuple<string, IPlayer, PlayerActorEventsListener> playerStuff;
            if (s_players.TryGetValue(playerId, out playerStuff))
            {
                return playerStuff.Item2;
            }
            var playerProxy = GetPlayerProxy(playerId);
            var playerEventListener = new PlayerActorEventsListener(playerId, signalRConnectionId);
            await playerProxy.SubscribeAsync(playerEventListener);
            playerStuff = new Tuple<string, IPlayer, PlayerActorEventsListener>(signalRConnectionId, playerProxy, playerEventListener);
            s_players[playerId] = playerStuff;
            return playerProxy;
        }

        public override Task OnConnected()
        {
            return base.OnConnected();
        }

        public override Task OnReconnected()
        {
            return base.OnReconnected();
        }



        public async Task LetMePlay(string playerId, string signalRId)
        {
            var player = await GetPlayer(playerId, signalRId);
            player.GoAndPlay();
        }

        public async Task SelectCell(string playerId, string signalRId, int cellId)
        {
            var player = await GetPlayer(playerId, signalRId);
            player.SelectCell(cellId);
        }

    }
}
