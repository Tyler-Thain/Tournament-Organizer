using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentAPI.Models
{
    public class Equipment
    {
        [Key]
        [Column(TypeName = "int")]
        public int EquipID { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Sport { get; set; }
        [ForeignKey("AthleticPark")]
        [Column(TypeName = "int")]
        public int ParkID { get; set; }
        [ForeignKey("Game")]
        [Column(TypeName = "int")]
        public int GameID { get; set; }
    }
}
