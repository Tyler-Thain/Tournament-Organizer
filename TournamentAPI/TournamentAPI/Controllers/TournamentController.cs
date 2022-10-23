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
    public class TournamentController : ControllerBase
    {
        private readonly TournamentContext _context;

        public TournamentController(TournamentContext context)
        {
            _context = context;
        }

        // GET: api/Tournament
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tournament>>> GetTournaments()
        {
            return await _context.Tournaments.ToListAsync();

        }

        // GET: api/Tournament/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Tournament>> GetTournament(int id)
        //{
        //    var tournament = await _context.Tournaments.FindAsync(id);

        //    if (tournament == null)
        //    {
        //        return NotFound();
        //    }

        //    return tournament;
        //}

        // PUT: api/Tournament/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTournament(int id, Tournament tournament)
        {

            var IParam = new SqlParameter("@ID", tournament.ID);
            var NParam = new SqlParameter("@Name", tournament.Name);
            var SParam = new SqlParameter("@Sport", tournament.Sport);
            var STParam = new SqlParameter("@startDate", tournament.StartDate);
            var EParam = new SqlParameter("@endDate", tournament.EndDate);
            var UParam = new SqlParameter("@Username", tournament.Username);
            var PParam = new SqlParameter("@ParkID", tournament.ParkID);

            var t = _context.Database.ExecuteSqlRaw("Execute Tournaments.updateTournament @ID, @Name, @Sport, @startDate, @endDate, @Username, @ParkID", IParam, NParam, SParam, STParam, EParam, UParam, PParam);

            //if (id != tournament.ID)
            //{
            //    return BadRequest();
            //}

            //_context.Entry(tournament).State = EntityState.Modified;

            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateConcurrencyException)
            //{
            //    if (!TournamentExists(id))
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

        // POST: api/Tournament
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Tournament>> PostTournament(Tournament tournament)
        {
            var IParam = new SqlParameter("@ID", tournament.ID);
            var NParam = new SqlParameter("@Name", tournament.Name);
            var SParam = new SqlParameter("@Sport", tournament.Sport);
            var STParam = new SqlParameter("@startDate", tournament.StartDate);
            var EParam = new SqlParameter("@endDate", tournament.EndDate);
            var UParam = new SqlParameter("@Username", tournament.Username);
            var PParam = new SqlParameter("@ParkID", tournament.ParkID);

            var t = _context.Database.ExecuteSqlRaw("Execute Tournaments.insertTournament @ID, @Name, @Sport, @startDate, @endDate, @Username, @ParkID", IParam, NParam, SParam, STParam, EParam, UParam, PParam);
            //_context.Tournaments.Add(tournament);
            //await _context.SaveChangesAsync();

            //return CreatedAtAction("GetTournament", new { id = tournament.ID }, tournament);
            return Ok();
        }

        // DELETE: api/Tournament/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTournament(int id)
        {

            var IParam = new SqlParameter("@ID", id);

            var tournament = _context.Database.ExecuteSqlRaw("Execute Tournaments.deleteTournament @ID", IParam);

            //var tournament = await _context.Tournaments.FindAsync(id);
            //if (tournament == null)
            //{
            //    return NotFound();
            //}

            //_context.Tournaments.Remove(tournament);
            //await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TournamentExists(int id)
        {
            return _context.Tournaments.Any(e => e.ID == id);
        }
    }
}
