using Microsoft.AspNetCore.Identity;

namespace youtube_clone_backend.Models
{
    public class User : IdentityUser
    {
        public int Id { get; set; }

        public string username { get; set; }
        public string password { get; set; }

    }
}
