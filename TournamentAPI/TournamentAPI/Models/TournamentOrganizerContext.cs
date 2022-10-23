using Microsoft.EntityFrameworkCore;

namespace TournamentAPI.Models
{
    public class TournamentOrganizerContext : DbContext
    {
        public TournamentOrganizerContext(DbContextOptions<TournamentOrganizerContext> options) : base(options)
        {

        }

        public DbSet<TournamentOrganizer> TournamentOrganizers { get; set; }
    }
}
