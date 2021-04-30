using System.Collections.Generic;
using System.Threading.Tasks;
using Training.Framework.Entities;

namespace Training.Framework.Services
{
    public interface IStudentRegistrationService
    {
        Task<IList<StudentRegistration>> GetAllStudentRegistrationAsync();
        Task<StudentRegistration> GetStudentRegistrationByIdAsync(int id);
        Task UpdateAsync(StudentRegistration studentRegistration);
        Task AddAsync(StudentRegistration studentRegistration);
        Task<StudentRegistration> DeleteAsync(int id);
    }
}
