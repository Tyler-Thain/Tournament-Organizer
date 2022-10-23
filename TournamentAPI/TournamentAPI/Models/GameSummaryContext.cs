using Microsoft.EntityFrameworkCore;

namespace TournamentAPI.Models
{
    public class GameSummaryContext : DbContext
    {
        public GameSummaryContext(DbContextOptions<GameSummaryContext> options) : base(options)
        {

        }

        public DbSet<GameSummary> GameSummaries { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<GameSummary>()
                .HasKey(c => new { c.Score, c.GameID });
        }
    }
}
