using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Training.Framework.Entities;
using Training.Framework.Services;

namespace Training.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentRegistrationController : ControllerBase
    {
        private readonly IStudentRegistrationService _studentRegistrationService;

        public StudentRegistrationController(IStudentRegistrationService studentRegistrationService)
        {
            _studentRegistrationService = studentRegistrationService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentRegistration>>> GetStudentRegistrations()
        {
            var studentRegistrations = await _studentRegistrationService.GetAllStudentRegistrationAsync();

            return Ok(studentRegistrations);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<StudentRegistration>> GetStudentRegistration(int id)
        {
            var studentRegistration = await _studentRegistrationService.GetStudentRegistrationByIdAsync(id);

            if (studentRegistration == null)
            {
                return NotFound();
            }

            return Ok(studentRegistration);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudentRegistration(int id, StudentRegistration studentRegistration)
        {
            if (id != studentRegistration.Id)
            {
                return BadRequest();
            }

            try
            {
                await _studentRegistrationService.UpdateAsync(studentRegistration);
            }
            catch (DbUpdateConcurrencyException)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<StudentRegistration>> PostStudentRegistration(StudentRegistration studentRegistration)
        {
            await _studentRegistrationService.AddAsync(studentRegistration);

            return CreatedAtAction("GetStudentRegistration", new { id = studentRegistration.Id }, studentRegistration);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<StudentRegistration>> DeleteStudentRegistration(int id)
        {
            var studentRegistration = await _studentRegistrationService.DeleteAsync(id);

            if (studentRegistration == null)
            {
                return NotFound();
            }

            return studentRegistration;
        }
    }
}
