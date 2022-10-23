using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentAPI.Models
{
    public class Referee
    {
        [Key]
        [Column(TypeName = "nvarchar(100)")]
        public string SIN { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Sport { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string FName { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string LName { get; set; }
        [ForeignKey("Game")]
        [Column(TypeName = "int")]
        public int GameID { get; set; }
    }
}
