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
    public class EquipmentController : ControllerBase
    {
        private readonly EquipmentContext _context;

        public EquipmentController(EquipmentContext context)
        {
            _context = context;
        }

        // GET: api/Equipment
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Equipment>>> GetEquipments()
        {
            return await _context.Equipments.ToListAsync();
        }

        // GET: api/Equipment/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Equipment>> GetEquipment(int id)
        //{
        //    var equipment = await _context.Equipments.FindAsync(id);

        //    if (equipment == null)
        //    {
        //        return NotFound();
        //    }

        //    return equipment;
        //}

        // PUT: api/Equipment/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEquipment(int id, Equipment equipment)
        {
            var EParam = new SqlParameter("@EquipID", equipment.EquipID);
            var SParam = new SqlParameter("@Sport", equipment.Sport);
            var PParam = new SqlParameter("@ParkID", equipment.ParkID);
            var GParam = new SqlParameter("@GameID", equipment.GameID);

            var e = _context.Database.ExecuteSqlRaw("Execute Equipments.updateEquipment @EquipID, @Sport, @ParkID, @GameID", EParam, SParam, PParam, GParam);

            //if (id != equipment.EquipID)
            //{
            //    return BadRequest();
            //}

            //_context.Entry(equipment).State = EntityState.Modified;

            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateConcurrencyException)
            //{
            //    if (!EquipmentExists(id))
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

        // POST: api/Equipment
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Equipment>> PostEquipment(Equipment equipment)
        {

            var EParam = new SqlParameter("@EquipID", equipment.EquipID);
            var SParam = new SqlParameter("@Sport", equipment.Sport);
            var PParam = new SqlParameter("@ParkID", equipment.ParkID);
            var GParam = new SqlParameter("@GameID", equipment.GameID);

            var e = _context.Database.ExecuteSqlRaw("Execute Equipments.insertEquipment @EquipID, @Sport, @ParkID, @GameID", EParam, SParam, PParam, GParam);

            //_context.Equipments.Add(equipment);
            //await _context.SaveChangesAsync();

            //return CreatedAtAction("GetEquipment", new { id = equipment.EquipID }, equipment);
            return Ok();
        }

        // DELETE: api/Equipment/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEquipment(int id)
        {

            var EParam = new SqlParameter("@EquipID", id);

            var e = _context.Database.ExecuteSqlRaw("Execute Equipments.deleteEquipment @EquipID", EParam);

            //var equipment = await _context.Equipments.FindAsync(id);
            //if (equipment == null)
            //{
            //    return NotFound();
            //}

            //_context.Equipments.Remove(equipment);
            //await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EquipmentExists(int id)
        {
            return _context.Equipments.Any(e => e.EquipID == id);
        }
    }
}
