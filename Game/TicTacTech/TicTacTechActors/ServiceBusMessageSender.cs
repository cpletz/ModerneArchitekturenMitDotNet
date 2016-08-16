using System;
using Microsoft.Azure;
using Microsoft.ServiceBus.Messaging;
using Newtonsoft.Json;

namespace TicTacTechActors
{
    static class ServiceBusMessageSender
    {
        static readonly string ServiceBusConnectionString = CloudConfigurationManager.GetSetting("Microsoft.ServiceBus.ConnectionString");
        static readonly TopicClient GameStartedTopic = TopicClient.CreateFromConnectionString(ServiceBusConnectionString, "gamestarted");
        static readonly TopicClient GameFinishedTopic = TopicClient.CreateFromConnectionString(ServiceBusConnectionString, "gamefinished");
        static readonly TopicClient GameMoveTopic = TopicClient.CreateFromConnectionString(ServiceBusConnectionString, "gamemove");

        public static void SendGameStarted(Guid gameId, DateTime startTime, string playerX, string playerO) =>
            GameStartedTopic.SendAsync(new BrokeredMessage(JsonConvert.SerializeObject(new { gameId, startTime, playerX, playerO })));

        public static void SendGameFinished(Guid gameId, DateTime endTime, string result) =>
            GameFinishedTopic.SendAsync(new BrokeredMessage(JsonConvert.SerializeObject(new { gameId, endTime, result })));

        public static void SendGameMove(Guid gameId, DateTime time, string moveBy, int position) =>
            GameMoveTopic.SendAsync(new BrokeredMessage(JsonConvert.SerializeObject(new { gameId, time, moveBy, position})));

    }
}
