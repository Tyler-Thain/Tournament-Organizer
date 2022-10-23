using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentAPI.Models
{
    public class GameSummary
    {
        [Column(TypeName = "nvarchar(100)")]
        public string Score { get; set; }
        [Column(TypeName = "int")]
        public int GameID { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Winner { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Loser { get; set; }

    }
}
