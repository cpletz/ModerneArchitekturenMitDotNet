using System;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.Azure;
using Microsoft.Azure.Documents.Client;
using Microsoft.ServiceBus.Messaging;
using Newtonsoft.Json;
using P = Player.Models.Player;

namespace Player.Controllers
{
    public class PlayerController : ApiController
    {

        const string EndpointUri = "https://tictactech.documents.azure.com:443/";
        const string PrimaryKey = "???";
        const string databaseName = "players";
        const string collectionName = "players";
        static readonly DocumentClient s_docDBClient = new DocumentClient(new Uri(EndpointUri), PrimaryKey);
        static readonly Uri s_documentCollectionUri = UriFactory.CreateDocumentCollectionUri(databaseName, collectionName);

        static readonly TopicClient s_svcBusClient = TopicClient.CreateFromConnectionString(CloudConfigurationManager.GetSetting("Microsoft.ServiceBus.ConnectionString"), "PlayerChanged");

        public P Get(string id)
        {
            var playerDoc = s_docDBClient.CreateDocumentQuery(s_documentCollectionUri).Where(doc => doc.Id == id).ToList().SingleOrDefault();
            if(playerDoc != null)
            {
                return new P {
                    id = id,
                    firstName = playerDoc.GetPropertyValue<string>("firstName"),
                    lastName = playerDoc.GetPropertyValue<string>("lastName"),
                    email = playerDoc.GetPropertyValue<string>("email") };
            }
            return null;
        }

        // POST: api/Player
        public async Task<P> Post([FromBody]P value)
        {
            var playerJson = JsonConvert.SerializeObject(value);
            await s_docDBClient.CreateDocumentAsync(s_documentCollectionUri, value);
            s_svcBusClient.Send(new BrokeredMessage(playerJson));
            return value;
        }

    }
}
