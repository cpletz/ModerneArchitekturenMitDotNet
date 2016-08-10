﻿using System;
using System.Collections.Generic;
using System.Fabric;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Azure;
using Microsoft.ServiceFabric.Data.Collections;
using Microsoft.ServiceFabric.Services.Communication.Runtime;
using Microsoft.ServiceFabric.Services.Remoting.Runtime;
using Microsoft.ServiceFabric.Services.Runtime;
using ServiceFabric.ServiceBus.Services.CommunicationListeners;
using TicTacTechPlayer.Interfaces;

namespace TicTacTechPlayer
{
    /// <summary>
    /// An instance of this class is created for each service replica by the Service Fabric runtime.
    /// </summary>
    internal sealed class TicTacTechPlayer : StatefulService, IPlayers
    {
        public TicTacTechPlayer(StatefulServiceContext context)
            : base(context)
        { }

        public async Task<IEnumerable<string>> GetPlayers()
        {
            var results = new List<string>();
            var resources = new Resources(StateManager);
            var players = await resources.GetPlayerDict();
            using (var tx = StateManager.CreateTransaction())
            {
                var playersEnumerable = await players.CreateEnumerableAsync(tx);
                var playersEnumerator = playersEnumerable.GetAsyncEnumerator();
                var more = true;
                while (more = await playersEnumerator.MoveNextAsync(CancellationToken.None))
                {
                    results.Add(playersEnumerator.Current.Value);
                }
            }
            return results;
        }

        /// <summary>
        /// Optional override to create listeners (e.g., HTTP, Service Remoting, WCF, etc.) for this service replica to handle client or user requests.
        /// </summary>
        /// <remarks>
        /// For more information on service communication, see http://aka.ms/servicefabricservicecommunication
        /// </remarks>
        /// <returns>A collection of listeners.</returns>
        protected override IEnumerable<ServiceReplicaListener> CreateServiceReplicaListeners()
        {
            yield return new ServiceReplicaListener(context => this.CreateServiceRemotingListener(context));

            yield return new ServiceReplicaListener(context => new ServiceBusSubscriptionCommunicationListener(
                new PlayerChangedHandler(this)
                , context
                , "playerchanged"
                , "game"), "StatefulService-ServiceBusSubscriptionListener");

        }

        ///// <summary>
        ///// This is the main entry point for your service replica.
        ///// This method executes when this replica of your service becomes primary and has write status.
        ///// </summary>
        ///// <param name="cancellationToken">Canceled when Service Fabric needs to shut down this service replica.</param>
        //protected override async Task RunAsync(CancellationToken cancellationToken)
        //{
        //    // TODO: Replace the following sample code with your own logic 
        //    //       or remove this RunAsync override if it's not needed in your service.

        //    var myDictionary = await this.StateManager.GetOrAddAsync<IReliableDictionary<string, long>>("myDictionary");

        //    while (true)
        //    {
        //        cancellationToken.ThrowIfCancellationRequested();

        //        using (var tx = this.StateManager.CreateTransaction())
        //        {
        //            var result = await myDictionary.TryGetValueAsync(tx, "Counter");

        //            ServiceEventSource.Current.ServiceMessage(this, "Current Counter Value: {0}",
        //                result.HasValue ? result.Value.ToString() : "Value does not exist.");

        //            await myDictionary.AddOrUpdateAsync(tx, "Counter", 0, (key, value) => ++value);

        //            // If an exception is thrown before calling CommitAsync, the transaction aborts, all changes are 
        //            // discarded, and nothing is saved to the secondary replicas.
        //            await tx.CommitAsync();
        //        }

        //        await Task.Delay(TimeSpan.FromSeconds(1), cancellationToken);
        //    }
        //}
    }
}