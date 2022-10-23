using Microsoft.EntityFrameworkCore;

namespace TournamentAPI.Models
{
    public class AthleticParkContext : DbContext
    {
        public AthleticParkContext(DbContextOptions<AthleticParkContext> options) : base(options)
        {

        }

        public DbSet<AthleticPark> AthleticParks { get; set;}
    }
}
