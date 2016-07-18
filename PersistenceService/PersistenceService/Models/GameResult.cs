using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersistenceService.Models
{
    public enum Result
    {
        P1Wins,P2Wins,Draw
    }

    public class GameResult
    {
        public Guid Id { get; set; }
        public DateTime GameStart { get; set; }
        public DateTime GameEnd { get; set; }
        public string P1Name { get; set; }
        public string P2Name { get; set; }

        public Result GameOutcome { get; set; }
    }
}