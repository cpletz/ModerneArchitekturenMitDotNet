using System;
using Microsoft.AspNet.SignalR;
using Microsoft.Azure;
using Microsoft.ServiceBus.Messaging;
using TicTacTechStats.Hubs;
using static Newtonsoft.Json.JsonConvert;

namespace TicTacTechStats
{

    class GameStarted
    {
        public Guid gameId;
        public DateTime startTime;
        public string playerX;
        public string playerO;

        public static GameStarted FromJson(string json) => DeserializeObject<GameStarted>(json);
    }

    class GameFinished
    {
        public Guid gameId;
        public DateTime endTime;
        public string result;

        public static GameFinished FromJson(string json) => DeserializeObject<GameFinished>(json);
    }

    class GameMove
    {
        public Guid gameId;
        public DateTime time;
        public string moveBy;
        public int position;

        public static GameMove FromJson(string json) => DeserializeObject<GameMove>(json);
    }


    static class ServiceBusMessageListener
    {
        static dynamic All => GlobalHost.ConnectionManager.GetHubContext<LiveGamesHub>().Clients.All;

        public static void Init()
        {
            var connectionString = CloudConfigurationManager.GetSetting("Microsoft.ServiceBus.ConnectionString");
            var options = new OnMessageOptions { AutoComplete = true };

            SubscriptionClient.CreateFromConnectionString(connectionString, "gamestarted", "live").OnMessage(
                msg => All.gameStarted(msg.GetBody<string>()), options);

            SubscriptionClient.CreateFromConnectionString(connectionString, "gamefinished", "live").OnMessage(
                msg => All.gameFinished(msg.GetBody<string>()), options);

            SubscriptionClient.CreateFromConnectionString(connectionString, "gamemove", "live").OnMessage(
                msg => All.gameMove(msg.GetBody<string>()), options);

        }

    }
}