using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Training.Framework.Entities;

namespace Training.Framework.Services
{
    public interface ICourseService
    {
        Task<IList<Course>> GetAllCourseAsync();
        Task<Course> GetCourseByIdAsync(int id);
        Task UpdateAsync(Course course);
        Task AddAsync(Course course);
        Task<Course> DeleteAsync(int id);
    }
}
