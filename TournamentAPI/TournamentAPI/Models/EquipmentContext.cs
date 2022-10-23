using Microsoft.EntityFrameworkCore;

namespace TournamentAPI.Models
{
    public class EquipmentContext : DbContext
    {
        public EquipmentContext(DbContextOptions<EquipmentContext> options) : base(options)
        {

        }

        public DbSet<Equipment> Equipments { get; set; }
    }
}
