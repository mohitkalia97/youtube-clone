using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using youtube_clone_backend.Models;

namespace youtube_clone_backend.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private const string connectionStringName = "youtube_clone_backendDbContextConnection";
        private readonly IConfiguration _configuration;

        public RegistrationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        [Route("registration")]
        public string registration(User registration)
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString(connectionStringName).ToString());
            SqlCommand cmd = new SqlCommand("INSERT INTO Registration(Username, Password) VALUES('" + registration.username + "','" + registration.password, con );

            int i = cmd.ExecuteNonQuery();
            return i > 0 ? "Data inserted" : "Error inserting data";
           
        }

    }
}
