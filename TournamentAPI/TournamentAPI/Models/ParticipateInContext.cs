using Microsoft.EntityFrameworkCore;

namespace TournamentAPI.Models
{
    public class ParticipateInContext : DbContext
    {
        public ParticipateInContext(DbContextOptions<ParticipateInContext> options) : base(options)
        {

        }

        public DbSet<ParticipateIn> Participate_Ins { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ParticipateIn>()
                .HasKey(c => new { c.TName, c.TID });
        }
    }
}
