using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
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
        static string DbConnStr => ConfigurationManager.ConnectionStrings["TicTacTechStatsDB"].ConnectionString;

        static void SendToSql(string proc, string json)
        {
            using (var conn = new SqlConnection(DbConnStr))
            {
                conn.Open();
                var cmd = conn.CreateCommand();
                cmd.CommandText = $"dbo.{proc}";
                cmd.CommandType = CommandType.StoredProcedure;
                var jsonParam = cmd.Parameters.Add("@json", SqlDbType.NVarChar);
                jsonParam.Value = json;
                cmd.ExecuteNonQuery();
            }
        }

        static void ProcessPlayer(string json) => SendToSql("ProcessPlayer", json);
        static void ProcessGameStarted(string json) => SendToSql("ProcessGameStarted", json);
        static void ProcessGameFinished(string json) => SendToSql("ProcessGameFinished", json);
        static void ProcessGameMove(string json) => SendToSql("ProcessGameMove", json);

        public static void GameStartedListener(
            [ServiceBusTrigger("gamestarted", "stats")] BrokeredMessage message,
            TextWriter log)
        {
            var body = message.GetBody<string>();
            ProcessGameStarted(body);
            log.WriteLine($"Game started: {body}");
            message.Complete();
        }

        public static void GameFinishedListener(
            [ServiceBusTrigger("gamefinished", "stats")] BrokeredMessage message,
            TextWriter log)
        {
            var body = message.GetBody<string>();
            ProcessGameFinished(body);
            log.WriteLine($"Game finished: {body}");
            message.Complete();
        }

        public static void GameMoveListener(
            [ServiceBusTrigger("gamemove", "stats")] BrokeredMessage message,
            TextWriter log)
        {
            var body = message.GetBody<string>();
            ProcessGameMove(body);
            log.WriteLine($"Game move: {body}");
            message.Complete();
        }

        public static void PlayerChangedListener(
            [ServiceBusTrigger("playerchanged", "stats")] BrokeredMessage message,
            TextWriter log)
        {
            var body = message.GetBody<string>();
            ProcessPlayer(body);
            log.WriteLine($"Player changed: {body}");
            message.Complete();
        }

    }
}
