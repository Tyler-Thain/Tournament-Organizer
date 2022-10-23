using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentAPI.Models
{
    public class Tournament
    {
        [Key]
        [Column(TypeName = "int")]
        public int ID { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Sport { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string StartDate { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string EndDate { get; set; }
        [ForeignKey("TournamentOrganizer")]
        [Column(TypeName = "nvarchar(100)")]
        public string Username { get; set; }
        [ForeignKey("AthleticPark")]
        [Column(TypeName = "int")]
        public int ParkID { get; set; }
    }
}
