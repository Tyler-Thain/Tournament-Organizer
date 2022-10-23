using Microsoft.EntityFrameworkCore;

namespace TournamentAPI.Models
{
    public class FieldContext : DbContext
    {
        public FieldContext(DbContextOptions<FieldContext> options) : base(options)
        {

        }

        public DbSet<Field> Fields { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Field>()
                .HasKey(c => new { c.FieldNo, c.GameID, c.ParkID });
        }
    }
}
