using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.V4.Pages.Account.Internal;
using Microsoft.AspNetCore.Mvc;
using youtube_clone_backend.Areas.Identity.Data;
using youtube_clone_backend.Models;
using LoginModel = youtube_clone_backend.Models.LoginModel;

namespace youtube_clone_backend.Controllers
{
    public class LoginController : Controller
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        public LoginController(SignInManager<ApplicationUser> signInManager) {
            _signInManager = signInManager; 
        }

        [HttpGet]
        [Route("login")]
        public IActionResult Login(string? returnUrl = null)
        {
            ViewData["ReturnUrl "] = returnUrl;  
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginModel model, string? returnUrl = null)
        {
            ViewData["ReturnUrl"] = returnUrl;
            if (!ModelState.IsValid) 
            {
                var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password,true, lockoutOnFailure: false);
                if (result.Succeeded)
                {
                    if (!string.IsNullOrEmpty(returnUrl) && Url.IsLocalUrl(returnUrl))
                    {
                        return Redirect(returnUrl);
                    }
                    else
                    {
                        return RedirectToAction(nameof(HomeController.Index), "Home");
                    }
                }
                else
                {
                    ModelState.AddModelError(string.Empty, "Invalid login attempt.");
                    return View(model);
                }
            }

            return View(model);
        }
    }
}
