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
    public class TournamentOrganizerController : ControllerBase
    {
        private readonly TournamentOrganizerContext _context;

        public TournamentOrganizerController(TournamentOrganizerContext context)
        {
            _context = context;
        }

        // GET: api/TournamentOrganizer
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TournamentOrganizer>>> GetTournamentOrganizers()
        {
            return await _context.TournamentOrganizers.ToListAsync();
            //var tournamentOrganizer = _context.TournamentOrganizers.FromSqlRaw("SELECT * FROM TournamentOrganizers").ToList();
            //return tournamentOrganizer;
        }

        // GET: api/TournamentOrganizer/5
        [HttpGet("{username}/{password}")]
        public async Task<ActionResult<IEnumerable<TournamentOrganizer>>> GetTournamentOrganizer(string username, string password)
        {
            //var tournamentOrganizer = await _context.TournamentOrganizers.FindAsync(id);

            //var tournamentOrganizer = _context.TournamentOrganizers.FromSqlRaw("SELECT * FROM TournamentOrganizers WHERE Username = '" + username + "' AND Password = '" + password + "'").ToList();
            var userParam = new SqlParameter("@Username", username);
            var passParam = new SqlParameter("@Password", password);
            var tournamentOrganizer = _context.TournamentOrganizers.FromSqlRaw("Execute TournamentOrganizers.login @Username, @Password", userParam, passParam).ToList();

            if (tournamentOrganizer == null)
            {
                return NotFound();
            }

            return tournamentOrganizer;
        }

        //[HttpGet("{id}")]
        //public async Task<ActionResult<TournamentOrganizer>> GetTournamentOrganizer(string id)
        //{
        //    var tournamentOrganizer = await _context.TournamentOrganizers.FindAsync(id);

            

        //    if (tournamentOrganizer == null)
        //    {
        //        return NotFound();
        //    }

        //    return tournamentOrganizer;
        //}

        // PUT: api/TournamentOrganizer/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutTournamentOrganizer(string id, TournamentOrganizer tournamentOrganizer)
        //{



            //if (id != tournamentOrganizer.Username)
            //{
            //    return BadRequest();
            //}

            //_context.Entry(tournamentOrganizer).State = EntityState.Modified;

            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateConcurrencyException)
            //{
            //    if (!TournamentOrganizerExists(id))
            //    {
            //        return NotFound();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

        //    return NoContent();
        //}

        // POST: api/TournamentOrganizer
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TournamentOrganizer>> PostTournamentOrganizer(TournamentOrganizer tournamentOrganizer)
        {

            var UParam = new SqlParameter("@Username", tournamentOrganizer.Username);
            var PParam = new SqlParameter("@Password", tournamentOrganizer.Password);
            var FParam = new SqlParameter("@FName", tournamentOrganizer.FName);
            var LParam = new SqlParameter("@LName", tournamentOrganizer.LName);
            var to = _context.Database.ExecuteSqlRaw("Execute TournamentOrganizers.insertTournamentOrganizer @Username, @Password, @FName, @LName", UParam, PParam, FParam, LParam);

            //_context.TournamentOrganizers.Add(tournamentOrganizer);
            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateException)
            //{
            //    if (TournamentOrganizerExists(tournamentOrganizer.Username))
            //    {
            //        return Conflict();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            //return CreatedAtAction("GetTournamentOrganizer", new { id = tournamentOrganizer.Username }, tournamentOrganizer);
            return Ok();
        }

        // DELETE: api/TournamentOrganizer/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteTournamentOrganizer(string id)
        //{
        //    var tournamentOrganizer = await _context.TournamentOrganizers.FindAsync(id);
        //    if (tournamentOrganizer == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.TournamentOrganizers.Remove(tournamentOrganizer);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        private bool TournamentOrganizerExists(string id)
        {
            return _context.TournamentOrganizers.Any(e => e.Username == id);
        }
    }
}
