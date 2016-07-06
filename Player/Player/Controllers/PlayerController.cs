using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using P = Player.Models.Player;

using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Newtonsoft.Json;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Microsoft.ServiceBus.Messaging;
using Microsoft.Azure;

namespace Player.Controllers
{

    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PlayerController : ApiController
    {

        private const string EndpointUri = "https://tictactech.documents.azure.com:443/";
        private const string PrimaryKey = "Wn7GKTZXALWabfQbkEn3KTDqHI6ZIiBjHaSZdPUKe7BREAKQdbxUMbXT1EBLs5LoC0La5EHIWrgNy38pUNm7gA==";
        private const string databaseName = "players";
        private const string collectionName = "players";

        // GET: api/Player
        public IEnumerable<P> Get()
        {
            return new P[0] ;
        }

        // GET: api/Player/5
        public P Get(string id)
        {
            return null;
        }

        // POST: api/Player
        public async Task Post([FromBody]P value)
        {
            var docDBClient = new DocumentClient(new Uri(EndpointUri), PrimaryKey);
            await docDBClient.CreateDocumentAsync(UriFactory.CreateDocumentCollectionUri(databaseName, collectionName), value);
            docDBClient.Dispose();

            string connectionString = CloudConfigurationManager.GetSetting("Microsoft.ServiceBus.ConnectionString");

            TopicClient svcBusCLient =
                TopicClient.CreateFromConnectionString(connectionString, "PlayerChanged");

            svcBusCLient.Send(new BrokeredMessage("Hi there!"));
        }

        // PUT: api/Player/5
        public void Put(string id, [FromBody]P value)
        {
        }

        // DELETE: api/Player/5
        public void Delete(string id)
        {
        }

    }
}
