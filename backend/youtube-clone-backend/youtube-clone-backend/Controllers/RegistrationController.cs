using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using youtube_clone_backend.Areas.Identity.Data;
using youtube_clone_backend.Models;

namespace youtube_clone_backend.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public RegistrationController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpPost]
        [Route("registration")]
        public async Task<IActionResult> Registration(User registration)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = new ApplicationUser { Email = registration.Email };
            var result = await _userManager.CreateAsync(user, registration.password);

            if (result.Succeeded)
            {

                return Ok("User registered successfully");
            }

            foreach (var error in result.Errors)
                ModelState.AddModelError("", error.Description);

            return BadRequest(ModelState);
        }
    }

}
