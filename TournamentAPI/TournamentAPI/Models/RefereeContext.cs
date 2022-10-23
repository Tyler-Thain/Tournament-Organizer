using Microsoft.EntityFrameworkCore;

namespace TournamentAPI.Models
{
    public class RefereeContext : DbContext
    {
        public RefereeContext(DbContextOptions<RefereeContext> options) : base(options)
        {

        }

        public DbSet<Referee> Referees { get; set; }
    }
}
