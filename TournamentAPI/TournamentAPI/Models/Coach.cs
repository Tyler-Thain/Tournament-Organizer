using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentAPI.Models
{
    public class Coach
    {
        [Key]
        [Column(TypeName = "nvarchar(100)")]
        public string SIN { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string FName { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string LName { get; set; }
        [ForeignKey("Team")]
        [Column(TypeName = "nvarchar(100)")]
        public string TName { get; set; }
    }
}
