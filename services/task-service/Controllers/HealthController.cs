using Microsoft.AspNetCore.Mvc;

namespace TaskService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HealthController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetHealth()
        {
            return Ok(new { service = "task", status = "ok" });
        }
    }
}
