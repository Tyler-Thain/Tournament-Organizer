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
    public class TeamController : ControllerBase
    {
        private readonly TeamContext _context;

        public TeamController(TeamContext context)
        {
            _context = context;
        }

        // GET: api/Team
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Team>>> GetTeams()
        {
            return await _context.Teams.ToListAsync();
        }

        // GET: api/Team/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Team>>> GetTeam(int id)
        {
            //var team = await _context.Teams.FindAsync(id);
            //var team = _context.Teams.FromSqlRaw("SELECT t.Name, t.NoPlayers FROM Teams as t, Participate_Ins as p WHERE (p.TID = " + id + ") AND (p.TName = t.Name)").ToList();
            var idParam = new SqlParameter("@ID", id);
            var team = _context.Teams.FromSqlRaw("Execute Teams.getTeamByTournament @ID", idParam).ToList();
            if (team == null)
            {
                return NotFound();
            }

            return team;
        }

        // PUT: api/Team/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTeam(string id, Team team)
        {

            var NParam = new SqlParameter("@Name", team.Name);
            var PParam = new SqlParameter("@NoPlayers", team.NoPlayers);

            var t = _context.Database.ExecuteSqlRaw("Execute Teams.updateTeam @Name, @NoPlayers", NParam, PParam);

            //if (id != team.Name)
            //{
            //    return BadRequest();
            //}

            //_context.Entry(team).State = EntityState.Modified;

            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateConcurrencyException)
            //{
            //    if (!TeamExists(id))
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

        // POST: api/Team
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Team>> PostTeam(Team team)
        {

            var NParam = new SqlParameter("@Name", team.Name);
            var PParam = new SqlParameter("@NoPlayers", team.NoPlayers);

            var t = _context.Database.ExecuteSqlRaw("Execute Teams.insertTeam @Name, @NoPlayers", NParam, PParam);

            //_context.Teams.Add(team);
            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateException)
            //{
            //    if (TeamExists(team.Name))
            //    {
            //        return Conflict();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            //return CreatedAtAction("GetTeam", new { id = team.Name }, team);
            return Ok();
        }

        // DELETE: api/Team/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeam(string id)
        {

            var NParam = new SqlParameter("@Name", id);

            var team = _context.Database.ExecuteSqlRaw("Execute Teams.deleteTeam @Name", NParam);

            //var team = await _context.Teams.FindAsync(id);
            //if (team == null)
            //{
            //    return NotFound();
            //}

            //_context.Teams.Remove(team);
            //await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TeamExists(string id)
        {
            return _context.Teams.Any(e => e.Name == id);
        }
    }
}
