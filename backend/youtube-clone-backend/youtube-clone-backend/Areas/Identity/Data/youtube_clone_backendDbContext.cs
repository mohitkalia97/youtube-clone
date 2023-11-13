using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using youtube_clone_backend.Areas.Identity.Data;

namespace youtube_clone_backend.Data;

public class youtube_clone_backendDbContext : IdentityDbContext<ApplicationUser>
{
    public youtube_clone_backendDbContext(DbContextOptions<youtube_clone_backendDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        // Customize the ASP.NET Identity model and override the defaults if needed.
        // For example, you can rename the ASP.NET Identity table names and more.
        // Add your customizations after calling base.OnModelCreating(builder);
    }
}