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
    public class AthleticParkController : ControllerBase
    {
        private readonly AthleticParkContext _context;

        public AthleticParkController(AthleticParkContext context)
        {
            _context = context;
        }

        // GET: api/AthleticPark
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AthleticPark>>> GetAthleticParks()
        {
            return await _context.AthleticParks.ToListAsync();
            //var athleticPark = _context.AthleticParks.FromSqlRaw("SELECT a.ParkID, a.Name, a.Address FROM AthleticParks as a").ToList();
            //return athleticPark;

        }

        // GET: api/AthleticPark/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<AthleticPark>> GetAthleticPark(int id)
        //{
        //    var athleticPark = await _context.AthleticParks.FindAsync(id);

        //    if (athleticPark == null)
        //    {
        //        return NotFound();
        //    }

        //    return athleticPark;
        //}

        // PUT: api/AthleticPark/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAthleticPark(int id, AthleticPark athleticPark)
        {

            var PParam = new SqlParameter("@ParkID", athleticPark.ParkID);
            var NParam = new SqlParameter("@Name", athleticPark.Name);
            var AParam = new SqlParameter("@Address", athleticPark.Address);

            var a = _context.Database.ExecuteSqlRaw("Execute AthleticParks.updateAthleticPark @ParkID, @Name, @Address", PParam, NParam, AParam);

            //if (id != athleticPark.ParkID)
            //{
            //    return BadRequest();
            //}

            //_context.Entry(athleticPark).State = EntityState.Modified;

            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateConcurrencyException)
            //{
            //    if (!AthleticParkExists(id))
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

        // POST: api/AthleticPark
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AthleticPark>> PostAthleticPark(AthleticPark athleticPark)
        {

            var PParam = new SqlParameter("@ParkID", athleticPark.ParkID);
            var NParam = new SqlParameter("@Name", athleticPark.Name);
            var AParam = new SqlParameter("@Address", athleticPark.Address);

            var a = _context.Database.ExecuteSqlRaw("Execute AthleticParks.insertAthleticPark @ParkID, @Name, @Address", PParam, NParam, AParam);

            //_context.AthleticParks.Add(athleticPark);
            //await _context.SaveChangesAsync();

            //return CreatedAtAction("GetAthleticPark", new { id = athleticPark.ParkID }, athleticPark);
            return Ok();
        }

        // DELETE: api/AthleticPark/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAthleticPark(int id)
        {
            var PParam = new SqlParameter("@ParkID", id);

            var a = _context.Database.ExecuteSqlRaw("Execute AthleticParks.deleteAthleticPark @ParkID", PParam);

            //var athleticPark = await _context.AthleticParks.FindAsync(id);
            //if (athleticPark == null)
            //{
            //    return NotFound();
            //}

            //_context.AthleticParks.Remove(athleticPark);
            //await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AthleticParkExists(int id)
        {
            return _context.AthleticParks.Any(e => e.ParkID == id);
        }
    }
}
