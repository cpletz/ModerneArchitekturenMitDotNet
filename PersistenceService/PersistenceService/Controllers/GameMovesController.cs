using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using PersistenceService.Models;

namespace PersistenceService.Controllers
{
    public class GameMovesController : ApiController
    {
        private GameContext db = new GameContext();

        // GET: api/GameMoves
        public IQueryable<GameMove> GetGameMoves()
        {
            return db.GameMoves;
        }

        // GET: api/GameMoves/5
        [ResponseType(typeof(GameMove))]
        public IHttpActionResult GetGameMove(Guid id)
        {
            GameMove gameMove = db.GameMoves.Find(id);
            if (gameMove == null)
            {
                return NotFound();
            }

            return Ok(gameMove);
        }

        // PUT: api/GameMoves/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutGameMove(Guid id, GameMove gameMove)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != gameMove.Id)
            {
                return BadRequest();
            }

            db.Entry(gameMove).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GameMoveExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/GameMoves
        [ResponseType(typeof(GameMove))]
        public IHttpActionResult PostGameMove(GameMove gameMove)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.GameMoves.Add(gameMove);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (GameMoveExists(gameMove.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = gameMove.Id }, gameMove);
        }

        // DELETE: api/GameMoves/5
        [ResponseType(typeof(GameMove))]
        public IHttpActionResult DeleteGameMove(Guid id)
        {
            GameMove gameMove = db.GameMoves.Find(id);
            if (gameMove == null)
            {
                return NotFound();
            }

            db.GameMoves.Remove(gameMove);
            db.SaveChanges();

            return Ok(gameMove);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool GameMoveExists(Guid id)
        {
            return db.GameMoves.Count(e => e.Id == id) > 0;
        }
    }
}