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
            [ServiceBusTrigger("gamestarted", "stats")] BrokeredMessage message, TextWriter log)
        {
            var data = message.GetBody<string>();
            log.WriteLine($"Game started: {data}");
        }

    }
}
