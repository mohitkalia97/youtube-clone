using Microsoft.EntityFrameworkCore;

namespace youtube_clone_backend.Models
{
    public class UserContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public UserContext(DbContextOptions options) : base(options) {
                    
        }

    }
}
