using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Training.Framework.Entities;

namespace Training.Framework.Services
{
    public interface IStudentService
    {
        Task<IList<Student>> GetAllStudentAsync();
        Task<Student> GetStudentByIdAsync(int id);
        Task UpdateAsync(Student student);
        Task AddAsync(Student student);
        Task<Student> DeleteAsync(int id);
    }
}
