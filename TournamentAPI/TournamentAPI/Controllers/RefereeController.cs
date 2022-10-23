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
    public class RefereeController : ControllerBase
    {
        private readonly RefereeContext _context;

        public RefereeController(RefereeContext context)
        {
            _context = context;
        }

        // GET: api/Referee
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Referee>>> GetReferees()
        {
            return await _context.Referees.ToListAsync();
        }

        // GET: api/Referee/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Referee>> GetReferee(string id)
        //{
        //    var referee = await _context.Referees.FindAsync(id);

        //    if (referee == null)
        //    {
        //        return NotFound();
        //    }

        //    return referee;
        //}

        // PUT: api/Referee/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReferee(string id, Referee referee)
        {

            var SParam = new SqlParameter("@SIN", referee.SIN);
            var SPParam = new SqlParameter("@Sport", referee.Sport);
            var FParam = new SqlParameter("@FName", referee.FName);
            var LParam = new SqlParameter("@LName", referee.LName);
            var GParam = new SqlParameter("@GameID", referee.GameID);

            var r = _context.Database.ExecuteSqlRaw("Execute Referees.updateReferee @SIN, @Sport, @FName, @LName, @GameID", SParam, SPParam, FParam, LParam, GParam);

            //if (id != referee.SIN)
            //{
            //    return BadRequest();
            //}

            //_context.Entry(referee).State = EntityState.Modified;

            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateConcurrencyException)
            //{
            //    if (!RefereeExists(id))
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

        // POST: api/Referee
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Referee>> PostReferee(Referee referee)
        {

            var SParam = new SqlParameter("@SIN", referee.SIN);
            var SPParam = new SqlParameter("@Sport", referee.Sport);
            var FParam = new SqlParameter("@FName", referee.FName);
            var LParam = new SqlParameter("@LName", referee.LName);
            var GParam = new SqlParameter("@GameID", referee.GameID);

            var r = _context.Database.ExecuteSqlRaw("Execute Referees.insertReferee @SIN, @Sport, @FName, @LName, @GameID", SParam, SPParam, FParam, LParam, GParam);

            //_context.Referees.Add(referee);
            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateException)
            //{
            //    if (RefereeExists(referee.SIN))
            //    {
            //        return Conflict();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            //return CreatedAtAction("GetReferee", new { id = referee.SIN }, referee);
            return Ok();
        }

        // DELETE: api/Referee/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReferee(string id)
        {
            var SParam = new SqlParameter("@SIN", id);
            var referee = _context.Database.ExecuteSqlRaw("Execute Referees.deleteReferee @SIN", SParam);

            //var referee = await _context.Referees.FindAsync(id);
            //if (referee == null)
            //{
            //    return NotFound();
            //}

            //_context.Referees.Remove(referee);
            //await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RefereeExists(string id)
        {
            return _context.Referees.Any(e => e.SIN == id);
        }
    }
}
