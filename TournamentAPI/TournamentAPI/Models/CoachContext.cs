using Microsoft.EntityFrameworkCore;

namespace TournamentAPI.Models
{
    public class CoachContext : DbContext
    {
        public CoachContext(DbContextOptions<CoachContext> options) : base(options)
        {

        }

        public DbSet<Coach> Coaches { get; set; }
    }
}
