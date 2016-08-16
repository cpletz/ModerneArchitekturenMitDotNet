using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.ServiceBus.Messaging;

namespace TicTacTechDataCollector
{
    public class Functions
    {

        public static void GameStartedListener(
            [ServiceBusTrigger("gamestarted", "stats")] BrokeredMessage message, 
            TextWriter log)
        {
            var data = message.GetBody<string>();
            log.WriteLine($"Game started: {data}");
            message.Complete();
        }

        public static void GameFinishedListener(
            [ServiceBusTrigger("gamefinished", "stats")] BrokeredMessage message, 
            TextWriter log)
        {
            var data = message.GetBody<string>();
            log.WriteLine($"Game finished: {data}");
            message.Complete();
        }

        public static void GameMoveListener(
            [ServiceBusTrigger("gamemove", "stats")] BrokeredMessage message,
            TextWriter log)
        {
            var data = message.GetBody<string>();
            log.WriteLine($"Game move: {data}");
            message.Complete();
        }

        public static void PlayerChangedListener(
            [ServiceBusTrigger("playerchanged", "stats")] BrokeredMessage message,
            TextWriter log)
        {
            var data = message.GetBody<string>();
            log.WriteLine($"Player changed: {data}");
            message.Complete();
        }

    }
}
