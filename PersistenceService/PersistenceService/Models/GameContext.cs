using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace PersistenceService.Models
{
    public class GameContext : DbContext
    {
        public DbSet<GameResult> GameResults { get; set; }
        public DbSet<GameMove> GameMoves { get; set; }
    }
}