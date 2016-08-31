using System;
using Microsoft.AspNet.SignalR;
using Microsoft.Azure;
using Microsoft.ServiceBus.Messaging;
using TicTacTechStats.Hubs;


namespace TicTacTechStats
{
    static class ServiceBusMessageListener
    {
        static dynamic All => GlobalHost.ConnectionManager.GetHubContext<LiveGamesHub>().Clients.All;

        public static void Init()
        {
            try
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
            catch { }
        }

    }
}