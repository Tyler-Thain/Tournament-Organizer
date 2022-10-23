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
    public class CoachController : ControllerBase
    {
        private readonly CoachContext _context;

        public CoachController(CoachContext context)
        {
            _context = context;
        }

        // GET: api/Coach
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Coach>>> GetCoaches()
        {
            return await _context.Coaches.ToListAsync();
        }

        // GET: api/Coach/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Coach>> GetCoach(string id)
        //{
        //    var coach = await _context.Coaches.FindAsync(id);

        //    if (coach == null)
        //    {
        //        return NotFound();
        //    }

        //    return coach;
        //}

        // PUT: api/Coach/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCoach(string id, Coach coach)
        {

            var SParam = new SqlParameter("@SIN", coach.SIN);
            var FParam = new SqlParameter("@FName", coach.FName);
            var LParam = new SqlParameter("@LName", coach.LName);
            var TParam = new SqlParameter("@TName", coach.TName);

            var c = _context.Database.ExecuteSqlRaw("Execute Coaches.updateCoach @SIN, @FName, @LName, @TName", SParam, FParam, LParam, TParam);
            //if (id != coach.SIN)
            //{
            //    return BadRequest();
            //}

            //_context.Entry(coach).State = EntityState.Modified;

            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateConcurrencyException)
            //{
            //    if (!CoachExists(id))
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

        // POST: api/Coach
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Coach>> PostCoach(Coach coach)
        {

            var SParam = new SqlParameter("@SIN", coach.SIN);
            var FParam = new SqlParameter("@FName", coach.FName);
            var LParam = new SqlParameter("@LName", coach.LName);
            var TParam = new SqlParameter("@TName", coach.TName);

            var c = _context.Database.ExecuteSqlRaw("Execute Coaches.insertCoach @SIN, @FName, @LName, @TName", SParam, FParam, LParam, TParam);

            //_context.Coaches.Add(coach);
            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateException)
            //{
            //    if (CoachExists(coach.SIN))
            //    {
            //        return Conflict();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            //return CreatedAtAction("GetCoach", new { id = coach.SIN }, coach);
            return Ok();
        }

        // DELETE: api/Coach/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCoach(string id)
        {
            var SParam = new SqlParameter("@SIN", id);

            var c = _context.Database.ExecuteSqlRaw("Execute Coaches.deleteCoach @SIN", SParam);

            //var coach = await _context.Coaches.FindAsync(id);
            //if (coach == null)
            //{
            //    return NotFound();
            //}

            //_context.Coaches.Remove(coach);
            //await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CoachExists(string id)
        {
            return _context.Coaches.Any(e => e.SIN == id);
        }
    }
}
