using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentAPI.Models
{
    public class Team
    {
        [Key]
        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; }
        [Column(TypeName = "int")]
        public int NoPlayers { get; set; }
    }
}
