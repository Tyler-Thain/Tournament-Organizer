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
    public class ParticipateInController : ControllerBase
    {
        private readonly ParticipateInContext _context;

        public ParticipateInController(ParticipateInContext context)
        {
            _context = context;
        }

        // GET: api/ParticipateIn
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ParticipateIn>>> GetParticipate_Ins()
        {
            return await _context.Participate_Ins.ToListAsync();
        }

        // GET: api/ParticipateIn/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<ParticipateIn>> GetParticipateIn(string id)
        //{
        //    var participateIn = await _context.Participate_Ins.FindAsync(id);

        //    if (participateIn == null)
        //    {
        //        return NotFound();
        //    }

        //    return participateIn;
        //}

        // PUT: api/ParticipateIn/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutParticipateIn(string id, ParticipateIn participateIn)
        //{
        //    if (id != participateIn.TName)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(participateIn).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!ParticipateInExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        // POST: api/ParticipateIn
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ParticipateIn>> PostParticipateIn(ParticipateIn participateIn)
        {

            var TParam = new SqlParameter("@TName", participateIn.TName);
            var IParam = new SqlParameter("@TID", participateIn.TID);

            var p = _context.Database.ExecuteSqlRaw("Execute Participate_Ins.insertParticipateIn @TName, @TID", TParam, IParam);

            //_context.Participate_Ins.Add(participateIn);
            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateException)
            //{
            //    if (ParticipateInExists(participateIn.TName))
            //    {
            //        return Conflict();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            //return CreatedAtAction("GetParticipateIn", new { id = participateIn.TName }, participateIn);
            return Ok();
        }

        // DELETE: api/ParticipateIn/5
        [HttpDelete("{TName}/{TID}")]
        public async Task<IActionResult> DeleteParticipateIn(string TName, int TID)
        {

            var TParam = new SqlParameter("@TName", TName);
            var IParam = new SqlParameter("@TID", TID);

            var p = _context.Database.ExecuteSqlRaw("Execute Participate_Ins.deleteParticipateIn @TName, @TID", TParam, IParam);

            //var participateIn = await _context.Participate_Ins.FindAsync(TName, TID);
            //if (participateIn == null)
            //{
            //    return NotFound();
            //}

            //_context.Participate_Ins.Remove(participateIn);
            //await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ParticipateInExists(string id)
        {
            return _context.Participate_Ins.Any(e => e.TName == id);
        }
    }
}
