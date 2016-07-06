using System;
using System.Collections.Generic;
using System.Web.Http;
using Microsoft.ServiceFabric.Services.Remoting.Client;
using TicTacTechActors.Interfaces;

namespace TicTacTechApi.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values 
        public IEnumerable<string> Get()
        {
            var mgr = ServiceProxy.Create<IGameManager>(new Uri("fabric:/TicTacTech/TicTacTechActors"));

            return new string[] { "value1", "value2" };
        }

        // GET api/values/5 
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values 
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5 
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5 
        public void Delete(int id)
        {
        }
    }
}
