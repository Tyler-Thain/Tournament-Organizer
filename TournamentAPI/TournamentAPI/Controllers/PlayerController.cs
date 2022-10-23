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
    public class PlayerController : ControllerBase
    {
        private readonly PlayerContext _context;

        public PlayerController(PlayerContext context)
        {
            _context = context;
        }

        // GET: api/Player
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Player>>> GetPlayers()
        {
            return await _context.Players.ToListAsync();
        }

        // GET: api/Player/5
        [HttpGet("{username}/{password}")]
        public async Task<ActionResult<IEnumerable<Player>>> GetPlayer(string username, string password)
        {
            //var player = await _context.Players.FindAsync(id);
            //var player = _context.Players.FromSqlRaw("SELECT * FROM Players WHERE Username = '" + username + "' AND Password = '" + password + "'").ToList();
            var userParam = new SqlParameter("@Username", username);
            var passParam = new SqlParameter("@Password", password);
            var player = _context.Players.FromSqlRaw("Execute Players.login @Username, @Password", userParam, passParam).ToList();
            if (player == null)
            {
                return NotFound();
            }

            return player;
        }

        [HttpGet("{username}")]
        public async Task<ActionResult<IEnumerable<Player>>> GetPlayer(string username)
        {
            //var player = await _context.Players.FindAsync(id);
            // var player = _context.Players.FromSqlRaw("SELECT * FROM Players WHERE Username = '" + username + "'").ToList();
            var userParam = new SqlParameter("@Username", username);
            var player = _context.Players.FromSqlRaw("Execute Players.getPlayerByUsername @Username", userParam).ToList();
            if (player == null)
            {
                return NotFound();
            }

            return player;
        }

        [HttpGet("onTeam/{TName}")]
        public async Task<ActionResult<IEnumerable<Player>>> GetPlayerOnTeam(string TName)
        {
            //var player = await _context.Players.FindAsync(id);
            var TNameParam = new SqlParameter("@TName", TName);
            var player = _context.Players.FromSqlRaw("EXECUTE Players.getPlayerOnTeam @TName", TNameParam).ToList();
            //"SELECT p.Username, p.Password, p.FName, p.LName, p.Age, p.Number, p.Position, p.TName FROM Players as p, Teams as t WHERE p.TName = t.Name AND t.Name = '" + TName + "'"

            if (player == null)
            {
                return NotFound();
            }

            return player;
        }

        // PUT: api/Player/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPlayer(string id, Player player)
        {

            var UParam = new SqlParameter("@Username", player.Username);
            var PParam = new SqlParameter("@Password", player.Password);
            var FParam = new SqlParameter("@FName", player.FName);
            var LParam = new SqlParameter("@LName", player.LName);
            var AParam = new SqlParameter("@Age", player.Age);
            var NParam = new SqlParameter("@Number", player.Number);
            var POParam = new SqlParameter("@Position", player.Position);
            var TParam = new SqlParameter("@TName", player.TName);
            var nPlayer = _context.Database.ExecuteSqlRaw("Execute Players.updatePlayer @Username, @Password, @FName, @LName, @Age, @Number, @Position, @TName", UParam, PParam, FParam, LParam, AParam, NParam, POParam, TParam);

            //if (id != player.Username)
            //{
            //    return BadRequest();
            //}

            //_context.Entry(player).State = EntityState.Modified;

            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateConcurrencyException)
            //{
            //    if (!PlayerExists(id))
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

        // POST: api/Player
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Player>> PostPlayer(Player player)
        {
            var UParam = new SqlParameter("@Username", player.Username);
            var PParam = new SqlParameter("@Password", player.Password);
            var FParam = new SqlParameter("@FName", player.FName);
            var LParam = new SqlParameter("@LName", player.LName);
            var AParam = new SqlParameter("@Age", player.Age);
            var NParam = new SqlParameter("@Number", player.Number);
            var POParam = new SqlParameter("@Position", player.Position);
            var TParam = new SqlParameter("@TName", player.TName);
            var nPlayer = _context.Database.ExecuteSqlRaw("Execute Players.insertPlayer @Username, @Password, @FName, @LName, @Age, @Number, @Position, @TName", UParam, PParam, FParam, LParam, AParam, NParam, POParam, TParam);
            //_context.Players.Add(player);
            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateException)
            //{
            //    if (PlayerExists(player.Username))
            //    {
            //        return Conflict();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            //return CreatedAtAction("GetPlayer", new { id = player.Username }, player);
            return Ok();
        }

        // DELETE: api/Player/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePlayer(string id)
        {

            var UParam = new SqlParameter("@Username", id);
            var player = _context.Database.ExecuteSqlRaw("Execute Players.deletePlayer @Username", UParam);

            //var player = await _context.Players.FindAsync(id);
            //if (player == null)
            //{
            //    return NotFound();
            //}

            //_context.Players.Remove(player);
            //await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PlayerExists(string id)
        {
            return _context.Players.Any(e => e.Username == id);
        }
    }
}
