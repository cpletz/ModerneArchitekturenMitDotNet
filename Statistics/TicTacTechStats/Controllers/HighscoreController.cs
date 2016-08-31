using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TicTacTechStats.Controllers
{
    public class HighscoreController : ApiController
    {
        static string DbConnStr => ConfigurationManager.ConnectionStrings["TicTacTechStatsDB"].ConnectionString;

        public string Get()
        {
            using (var conn = new SqlConnection(DbConnStr))
            {
                conn.Open();
                var cmd = conn.CreateCommand();
                cmd.CommandText = "[dbo].[RetrieveHighscore]";
                cmd.CommandType = CommandType.StoredProcedure;
                var res = cmd.ExecuteScalar();
                return res.ToString();
            }
        }
    }
}
