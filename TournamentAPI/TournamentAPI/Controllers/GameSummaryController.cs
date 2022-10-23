using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using TournamentAPI.Models;

namespace TournamentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameSummaryController : ControllerBase
    {
        private readonly GameSummaryContext _context;

        public GameSummaryController(GameSummaryContext context)
        {
            _context = context;
        }

        // GET: api/GameSummary
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GameSummary>>> GetGameSummaries()
        {
            return await _context.GameSummaries.ToListAsync();
            //var gameSummary = _context.GameSummaries.FromSqlRaw("SELECT * FROM GameSummaries").ToList();
            //return gameSummary;
        }

        // GET: api/GameSummary/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<GameSummary>>> GetGameSummary(int id)
        {
            //var gameSummary = await _context.GameSummaries.FindAsync(id);
            //var gameSummary = _context.GameSummaries.FromSqlRaw("SELECT g.Score, g.GameID, g.Winner, g.Loser FROM GameSummaries as g, Tournaments as t, Games as ga WHERE " +
            //    "(ga.GameID = g.GameID) AND (ga.TID = " + id + ")").ToList();
            var idParam = new SqlParameter("@ID", id);
            var gameSummary = _context.GameSummaries.FromSqlRaw("Execute GameSummaries.getGameSummaryByTournament @ID", idParam).ToList();

            if (gameSummary == null)
            {
                return NotFound();
            }

            return gameSummary;
        }

        // PUT: api/GameSummary/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{Score}/{GameID}")]
        public async Task<IActionResult> PutGameSummary(string Score, int GameID, GameSummary gameSummary)
        {

            var scoreParam = new SqlParameter("@Score", Score);
            var gameIDParam = new SqlParameter("@GameID", GameID);
            var winnerParam = new SqlParameter("@Winner", gameSummary.Winner);
            var loserParam = new SqlParameter("@Loser", gameSummary.Loser);
            var gSum = _context.Database.ExecuteSqlRaw("Execute GameSummaries.updateGameSummary @Score, @GameID, @Winner, @Loser", scoreParam, gameIDParam, winnerParam, loserParam);

            //if (GameID != gameSummary.GameID || Score != gameSummary.Score)
            //{
            //    return BadRequest();
            //}

            //_context.Entry(gameSummary).State = EntityState.Modified;

            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateConcurrencyException)
            //{
            //    if (!GameSummaryExists(Score, GameID))
            //    {
            //        return NotFound();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            return NoContent();
        }

        // POST: api/GameSummary
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<GameSummary>> PostGameSummary(GameSummary gameSummary)
        {
            var scoreParam = new SqlParameter("@Score", gameSummary.Score);
            var gameIDParam = new SqlParameter("@GameID", gameSummary.GameID);
            var winnerParam = new SqlParameter("@Winner", gameSummary.Winner);
            var loserParam = new SqlParameter("@Loser", gameSummary.Loser);
            var gSum = _context.Database.ExecuteSqlRaw("Execute GameSummaries.insertGameSummary @Score, @GameID, @Winner, @Loser", scoreParam, gameIDParam, winnerParam, loserParam);
            //_context.GameSummaries.Add(gameSummary);
            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateException)
            //{
            //    if (GameSummaryExists(gameSummary.Score, gameSummary.GameID))
            //    {
            //        return Conflict();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            //return CreatedAtAction("GetGameSummary", new { id = gameSummary.Score }, gameSummary);
            return Ok();
        }

        // DELETE: api/GameSummary/5
        [HttpDelete("{Score}/{GameID}")]
        public async Task<IActionResult> DeleteGameSummary(string Score, int GameID)
        {

            var scoreParam = new SqlParameter("@Score", Score);
            var gameIDParam = new SqlParameter("@GameID", GameID);
            var gSum = _context.Database.ExecuteSqlRaw("Execute GameSummaries.deleteGameSummary @Score, @GameID", scoreParam, gameIDParam);

            //var gameSummary = await _context.GameSummaries.FindAsync(Score, GameID);
            //if (gameSummary == null)
            //{
            //    return NotFound();
            //}

            //_context.GameSummaries.Remove(gameSummary);
            //await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GameSummaryExists(string Score, int GameID)
        {
            return _context.GameSummaries.Any(e => e.GameID == GameID && e.Score == Score);
        }
    }
}
