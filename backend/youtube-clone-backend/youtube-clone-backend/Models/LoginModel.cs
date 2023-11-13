using System.ComponentModel.DataAnnotations;

namespace youtube_clone_backend.Models
{
    public class LoginModel
    {
        [Required]
        [EmailAddress]
        public string? Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string? Password { get; set; }

        public bool RememberMe { get; set; }
    }
}
