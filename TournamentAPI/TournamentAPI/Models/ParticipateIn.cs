using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentAPI.Models
{
    public class ParticipateIn
    {
        [Key]
        [ForeignKey("Team")]
        [Column(TypeName = "nvarchar(100)")]
        public string TName { get; set; }
        [ForeignKey("Tournament")]
        [Column(TypeName = "int")]
        public int TID { get; set; }
    }
}
