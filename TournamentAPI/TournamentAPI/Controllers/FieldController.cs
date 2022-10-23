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
    public class FieldController : ControllerBase
    {
        private readonly FieldContext _context;

        public FieldController(FieldContext context)
        {
            _context = context;
        }

        // GET: api/Field
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Field>>> GetFields()
        {
            return await _context.Fields.ToListAsync();
            
        }

        // GET: api/Field/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Field>>> GetField(int id)
        {
            //var @field = await _context.Fields.FindAsync(id);


            //var @field = _context.Fields.FromSqlRaw("SELECT f.FieldNo, f.GameID, f.ParkID, f.Sport FROM Fields as f, Tournaments as t, Games as g WHERE t.ID = " + id + " AND t.ParkID = f.ParkID AND g.GameID = f.GameID AND g.TID = t.ID").ToList();
            var idParam = new SqlParameter("@ID", id);
            var @field = _context.Fields.FromSqlRaw("Execute Fields.getFieldByTournament @ID", idParam).ToList();

            if (@field == null)
            {
                return NotFound();
            }

            return @field;
        }

        // PUT: api/Field/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{FieldNo}/{GameID}/{ParkID}")]
        public async Task<IActionResult> PutField(int FieldNo, int GameID, int ParkID, Field field)
        {

            var FParam = new SqlParameter("@FieldNo", FieldNo);
            var GParam = new SqlParameter("@GameID", GameID);
            var PParam = new SqlParameter("@ParkID", ParkID);
            var SParam = new SqlParameter("@Sport", field.Sport);

            var f = _context.Database.ExecuteSqlRaw("Execute Fields.updateField @FieldNo, @GameID, @ParkID, @Sport", FParam, GParam, PParam, SParam);

            //if (FieldNo != @field.FieldNo || GameID != field.GameID || ParkID != field.ParkID)
            //{
            //    return BadRequest();
            //}

            //_context.Entry(@field).State = EntityState.Modified;

            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateConcurrencyException)
            //{
            //    if (!FieldExists(FieldNo, GameID, ParkID))
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

        // POST: api/Field
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Field>> PostField(Field field)
        {

            var FParam = new SqlParameter("@FieldNo", field.FieldNo);
            var GParam = new SqlParameter("@GameID", field.GameID);
            var PParam = new SqlParameter("@ParkID", field.ParkID);
            var SParam = new SqlParameter("@Sport", field.Sport);

            var f = _context.Database.ExecuteSqlRaw("Execute Fields.insertField @FieldNo, @GameID, @ParkID, @Sport", FParam, GParam, PParam, SParam);

            //_context.Fields.Add(@field);
            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateException)
            //{
            //    if (FieldExists(@field.FieldNo, @field.GameID, @field.ParkID))
            //    {
            //        return Conflict();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            //return CreatedAtAction("GetField", new { id = @field.FieldNo }, @field);
            return Ok();
        }

        // DELETE: api/Field/5
        [HttpDelete("{FieldNo}/{GameID}/{ParkID}")]
        public async Task<IActionResult> DeleteField(int FieldNo, int GameID, int ParkID)
        {

            var FParam = new SqlParameter("@FieldNo", FieldNo);
            var GParam = new SqlParameter("@GameID", GameID);
            var PParam = new SqlParameter("@ParkID", ParkID);

            var f = _context.Database.ExecuteSqlRaw("Execute Fields.deleteField @FieldNo, @GameID, @ParkID", FParam, GParam, PParam);
            //var @field = await _context.Fields.FindAsync(FieldNo, GameID, ParkID);

            //if (@field == null)
            //{
            //    return NotFound();
            //}

            //_context.Fields.Remove(@field);
            //await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FieldExists(int FieldNo, int GameID, int ParkID)
        {
            return _context.Fields.Any(e => e.FieldNo == FieldNo && e.GameID == GameID && e.ParkID == ParkID);
        }
    }
}
