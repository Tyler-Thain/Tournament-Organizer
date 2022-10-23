using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentAPI.Models
{
    public class Game
    {
        [Key]
        [Column(TypeName = "int")]
        public int GameID { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Day { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Month { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Year { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Time { get; set; }
        [Column(TypeName = "int")]
        public int TID { get; set; }
        [ForeignKey("Team")]
        [Column(TypeName = "nvarchar(100)")]
        public string HName { get; set; }
        [ForeignKey("Team")]
        [Column(TypeName = "nvarchar(100)")]
        public string AName { get; set; }

    }
}
