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
    public class GameResultsController : ApiController
    {
        private GameContext db = new GameContext();

        // GET: api/GameResults
        public IQueryable<GameResult> GetGameResults()
        {
            return db.GameResults;
        }

        // GET: api/GameResults/5
        [ResponseType(typeof(GameResult))]
        public IHttpActionResult GetGameResult(Guid id)
        {
            GameResult gameResult = db.GameResults.Find(id);
            if (gameResult == null)
            {
                return NotFound();
            }

            return Ok(gameResult);
        }

        // PUT: api/GameResults/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutGameResult(Guid id, GameResult gameResult)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != gameResult.Id)
            {
                return BadRequest();
            }

            db.Entry(gameResult).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GameResultExists(id))
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

        // POST: api/GameResults
        [ResponseType(typeof(GameResult))]
        public IHttpActionResult PostGameResult(GameResult gameResult)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.GameResults.Add(gameResult);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (GameResultExists(gameResult.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = gameResult.Id }, gameResult);
        }

        // DELETE: api/GameResults/5
        [ResponseType(typeof(GameResult))]
        public IHttpActionResult DeleteGameResult(Guid id)
        {
            GameResult gameResult = db.GameResults.Find(id);
            if (gameResult == null)
            {
                return NotFound();
            }

            db.GameResults.Remove(gameResult);
            db.SaveChanges();

            return Ok(gameResult);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool GameResultExists(Guid id)
        {
            return db.GameResults.Count(e => e.Id == id) > 0;
        }
    }
}