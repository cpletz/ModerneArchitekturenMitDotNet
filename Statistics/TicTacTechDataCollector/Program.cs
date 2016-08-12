using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.ServiceBus.Messaging;
using System.IO;
using System.Configuration;
using Microsoft.ServiceBus;
using Microsoft.Azure.WebJobs.ServiceBus;

namespace TicTacTechDataCollector
{
    //******************************************************************************************************
    // This will show you how to perform common scenarios using the Microsoft Azure Service messaging using 
    // the Microsoft Azure WebJobs SDK. The scenarios covered include triggering a function when a new message comes
    // on a queue or topic, and sending a message to another queue or topic.     
    // 
    // In this sample, the Program class starts the JobHost and creates the demo data. The Functions class
    // contains methods that will be invoked when messages are placed on the Service Bus, based on the attributes in 
    // the method headers.
    //
    // To learn more about Microsoft Azure WebJobs SDK, please see http://go.microsoft.com/fwlink/?LinkID=320976
    //
    // TODO: 1. Create a Storage Account and Service Bus Messaging namespace through the Azure Portal 
    //       2. Open app.config and paste your Storage connection string into the AzureWebJobsDashboard and
    //           AzureWebJobsStorage connection string settings.       
    //       3. Paste your Service Bus connection string into the AzureWebJobsServiceBus connection string setting.
    //*****************************************************************************************************
    class Program
    {
        private static string ServicesBusConnectionString;


        public static void Main()
        {
            if (!VerifyConfiguration())
            {
                Console.ReadLine();
                return;
            }

            ServicesBusConnectionString = ConfigurationManager.ConnectionStrings["AzureWebJobsServiceBus"].ConnectionString;

            var sbConfig = new ServiceBusConfiguration { ConnectionString = ServicesBusConnectionString };
            var jobHostConfig = new JobHostConfiguration();
            jobHostConfig.UseServiceBus(sbConfig);


            JobHost host = new JobHost(jobHostConfig);
            host.RunAndBlock();
        }

        private static bool VerifyConfiguration()
        {
            string webJobsDashboard = ConfigurationManager.ConnectionStrings["AzureWebJobsDashboard"].ConnectionString;
            string webJobsStorage = ConfigurationManager.ConnectionStrings["AzureWebJobsStorage"].ConnectionString;
            string servicesBusConnectionString = ConfigurationManager.ConnectionStrings["AzureWebJobsServiceBus"].ConnectionString;

            bool configOK = true;
            if (string.IsNullOrWhiteSpace(webJobsDashboard) || string.IsNullOrWhiteSpace(webJobsStorage))
            {
                configOK = false;
                Console.WriteLine("Please add the Azure Storage account credentials in App.config");
            }
            if (string.IsNullOrWhiteSpace(servicesBusConnectionString))
            {
                configOK = false;
                Console.WriteLine("Please add your Service Bus connection string in App.config");
            }
            return configOK;
        }

    }
}
