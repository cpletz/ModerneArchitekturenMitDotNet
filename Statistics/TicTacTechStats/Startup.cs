using System;
using System.Collections.Generic;
using System.Web.Http;
using Microsoft.AspNet.SignalR;
using Owin;
using Microsoft.Owin.Cors;

namespace TicTacTechStats
{
    public class Startup
    {
        public void Configuration(IAppBuilder appBuilder)
        {
            appBuilder.Map("/signalr", map =>
            {
                map.UseCors(CorsOptions.AllowAll);
                var hubConfiguration = new HubConfiguration();
                map.RunSignalR(hubConfiguration);
            });

            ServiceBusMessageListener.Init();
        }
    }
}