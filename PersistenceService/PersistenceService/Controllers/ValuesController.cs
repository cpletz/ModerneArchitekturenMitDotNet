//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net;
//using System.Net.Http;
//using System.Web.Http;
//using Swashbuckle.Swagger.Annotations;
//using PersistenceService.Models;
//using System.Text;

//namespace PersistenceService.Controllers
//{
//    public class ValuesController : ApiController
//    {
//        // GET api/values
//        [SwaggerOperation("GetAll")]
//        public IEnumerable<string> Get()
//        {
//            List<string> list = new List<string>();

//            using (var db = new GameContext())
//            {
//                db.GameResults.Add(new GameResult()
//                {
//                    Id = Guid.NewGuid(),
//                    GameStart = DateTime.Now,
//                    GameEnd = DateTime.Now.Add(TimeSpan.FromHours(1)),
//                    GameOutcome = Result.P1Wins,
//                    P1Name = "Manu",
//                    P2Name = "Christoph"
//                });

//                db.SaveChanges();

//                foreach (var item in db.GameResults)
//                {
//                    list.Add(item.P1Name);
//                    Console.WriteLine(item.P1Name);
//                }

//            }
//            return list.ToArray();
//        }

//        // GET api/values/5
//        [SwaggerOperation("GetById")]
//        [SwaggerResponse(HttpStatusCode.OK)]
//        [SwaggerResponse(HttpStatusCode.NotFound)]
//        public string Get(int id)
//        {
//            return "value";
//        }

//        // POST api/values
//        [SwaggerOperation("Create")]
//        [SwaggerResponse(HttpStatusCode.Created)]
//        public void Post([FromBody]string value)
//        {
//        }

//        // PUT api/values/5
//        [SwaggerOperation("Update")]
//        [SwaggerResponse(HttpStatusCode.OK)]
//        [SwaggerResponse(HttpStatusCode.NotFound)]
//        public void Put(int id, [FromBody]string value)
//        {
//        }

//        // DELETE api/values/5
//        [SwaggerOperation("Delete")]
//        [SwaggerResponse(HttpStatusCode.OK)]
//        [SwaggerResponse(HttpStatusCode.NotFound)]
//        public void Delete(int id)
//        {
//        }
//    }
//}
