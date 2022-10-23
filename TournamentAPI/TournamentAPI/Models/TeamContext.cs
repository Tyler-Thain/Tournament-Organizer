using Microsoft.EntityFrameworkCore;

namespace TournamentAPI.Models
{
    public class TeamContext : DbContext
    {
        public TeamContext(DbContextOptions<TeamContext> options) : base(options)
        {

        }

        public DbSet<Team> Teams { get; set; }
    }
}
