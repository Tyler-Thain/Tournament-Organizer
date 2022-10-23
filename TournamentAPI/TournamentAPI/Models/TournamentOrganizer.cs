using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TournamentAPI.Models
{
    public class TournamentOrganizer
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

    }
}
