using System;
using System.Collections.Concurrent;
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
            string _signalRId;

            public PlayerActorEventsListener(string signalRId)
            {
                _signalRId = signalRId;
            }

            dynamic Client => GlobalHost.ConnectionManager.GetHubContext<GameHub>().Clients.Client(_signalRId);

            public void GameStarted(string otherPlayer, string yourRole) => Client.gameStarted(otherPlayer, yourRole);

            public void GameStateChanged(string cells, PlayerGameStatus status) => Client.gameStateChanged(cells, status.ToString());
        }

        class PlayerContext
        {
            public string PlayerId { get; private set; }
            public string SignalRConnectionId { get; private set; }
            public IPlayer PlayerProxy { get; private set; }
            public PlayerActorEventsListener PlayerEventListener { get; private set; }

            public PlayerContext(string playerId, string connectionId)
            {
                PlayerId = playerId;
                SignalRConnectionId = connectionId;
            }

            public async Task Init()
            {
                PlayerProxy = ActorProxy.Create<IPlayer>(new ActorId(PlayerId), new Uri("fabric:/TicTacTech/PlayerActorService"));
                PlayerEventListener = new PlayerActorEventsListener(SignalRConnectionId);
                await PlayerProxy.SubscribeAsync(PlayerEventListener, TimeSpan.FromSeconds(10));
            }          

            public void Unsubscribe()
            {
                PlayerProxy.UnsubscribeAsync(PlayerEventListener);
            }

        }

        static ConcurrentDictionary<string, PlayerContext> Players = new ConcurrentDictionary<string, PlayerContext>();

        static async Task<IPlayer> GetPlayer(string playerId, string signalRConnectionId)
        {
            PlayerContext playerContext;
            if (Players.TryGetValue(playerId, out playerContext))
            {
                if (playerContext.SignalRConnectionId == signalRConnectionId)
                {
                    return playerContext.PlayerProxy;
                }
                playerContext.Unsubscribe();
            }
            playerContext = new PlayerContext(playerId, signalRConnectionId);
            await playerContext.Init();
            Players[playerId] = playerContext;
            return playerContext.PlayerProxy;
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
