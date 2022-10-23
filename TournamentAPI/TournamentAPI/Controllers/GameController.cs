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
    public class GameController : ControllerBase
    {
        private readonly GameContext _context;

        public GameController(GameContext context)
        {
            _context = context;
        }

        // GET: api/Game
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Game>>> GetGames()
        {
            return await _context.Games.ToListAsync();
        }

        // GET: api/Game/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Game>>> GetGame(int id)
        {
            //var game = await _context.Games.FindAsync(id);
            //var game = _context.Games.FromSqlRaw("SELECT g.GameID, g.Day, g.Month, g.Year, g.Time, g.TID, g.HName, g.AName FROM Games as g, " +
            //    "Tournaments as t WHERE g.TID = t.ID AND t.ID = " + id).ToList();
            var idParam = new SqlParameter("@ID", id);
            var game = _context.Games.FromSqlRaw("execute Games.getGameByTournament @ID", idParam).ToList();
            if (game == null)
            {
                return NotFound();
            }

            return game;
        }

        // PUT: api/Game/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGame(int id, Game game)
        {

            var GParam = new SqlParameter("@GameID", game.GameID);
            var DParam = new SqlParameter("@Day", game.Day);
            var MParam = new SqlParameter("@Month", game.Month);
            var YParam = new SqlParameter("@Year", game.Year);
            var TParam = new SqlParameter("@Time", game.Time);
            var TIParam = new SqlParameter("@TID", game.TID);
            var HParam = new SqlParameter("@HName", game.HName);
            var AParam = new SqlParameter("@AName", game.AName);

            var g = _context.Database.ExecuteSqlRaw("Execute Games.updateGame @GameID, @Day, @Month, @Year, @Time, @TID, @HName, @AName", GParam, DParam, MParam, YParam, TParam, TIParam, HParam, AParam);
            //if (id != game.GameID)
            //{
            //    return BadRequest();
            //}

            //_context.Entry(game).State = EntityState.Modified;

            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateConcurrencyException)
            //{
            //    if (!GameExists(id))
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

        // POST: api/Game
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Game>> PostGame(Game game)
        {

            var GParam = new SqlParameter("@GameID", game.GameID);
            var DParam = new SqlParameter("@Day", game.Day);
            var MParam = new SqlParameter("@Month", game.Month);
            var YParam = new SqlParameter("@Year", game.Year);
            var TParam = new SqlParameter("@Time", game.Time);
            var TIParam = new SqlParameter("@TID", game.TID);
            var HParam = new SqlParameter("@HName", game.HName);
            var AParam = new SqlParameter("@AName", game.AName);

            var g = _context.Database.ExecuteSqlRaw("Execute Games.insertGame @GameID, @Day, @Month, @Year, @Time, @TID, @HName, @AName", GParam, DParam, MParam, YParam, TParam, TIParam, HParam, AParam);
            //_context.Games.Add(game);
            //await _context.SaveChangesAsync();

            //return CreatedAtAction("GetGame", new { id = game.GameID }, game);
            return Ok();
        }

        // DELETE: api/Game/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGame(int id)
        {
            var GParam = new SqlParameter("@GameID", id);

            var g = _context.Database.ExecuteSqlRaw("Execute Games.deleteGame @GameID", GParam);

            //var game = await _context.Games.FindAsync(id);
            //if (game == null)
            //{
            //    return NotFound();
            //}

            //_context.Games.Remove(game);
            //await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GameExists(int id)
        {
            return _context.Games.Any(e => e.GameID == id);
        }
    }
}
