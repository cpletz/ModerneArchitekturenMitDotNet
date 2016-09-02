using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Http.Results;

namespace TicTacTechStats.Controllers
{
    public class HighscoreController : ApiController
    {
        static string DbConnStr => ConfigurationManager.ConnectionStrings["TicTacTechStatsDB"].ConnectionString;

        public HttpResponseMessage Get()
        {
            using (var conn = new SqlConnection(DbConnStr))
            {
                conn.Open();
                var cmd = conn.CreateCommand();
                cmd.CommandText = "[dbo].[RetrieveHighscore]";
                cmd.CommandType = CommandType.StoredProcedure;
                var res = cmd.ExecuteScalar();
                var response = this.Request.CreateResponse(HttpStatusCode.OK);
                response.Content = new StringContent(res.ToString(), Encoding.UTF8, "application/json");
                return response;
            }
        }



        protected override ResponseMessageResult ResponseMessage(HttpResponseMessage response)
        {
            return base.ResponseMessage(response);
        }
    }
}
