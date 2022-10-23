using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentAPI.Models
{
    public class Player
    {
        [Key]
        [Column(TypeName = "nvarchar(100)")]
        public string Username { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Password { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string FName { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string LName { get; set; }
        [Column(TypeName = "int")]
        public int Age { get; set; }
        [Column(TypeName = "int")]
        public int Number { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Position { get; set; }
        [ForeignKey("Team")]
        [Column(TypeName = "nvarchar(100)")]
        public string TName { get; set; }

    }
}
