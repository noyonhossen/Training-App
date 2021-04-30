using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Training.Framework.Entities;
using Training.Framework.UnitOfWorks;

namespace Training.Framework.Services
{
    public class CourseService : ICourseService
    {
        private readonly ICourseUnitOfWork _courseUnitOfWork;

        public CourseService(ICourseUnitOfWork courseUnitOfWork)
        {
            _courseUnitOfWork = courseUnitOfWork;
        }

        public async Task<IList<Course>> GetAllCourseAsync()
        {
            return await _courseUnitOfWork.CourseRepository.GetAllAsync();
        }

        public async Task<Course> GetCourseByIdAsync(int id)
        {
            return await _courseUnitOfWork.CourseRepository.GetByIdAsync(id);
        }

        public async Task UpdateAsync(Course course)
        {
            var count = await _courseUnitOfWork.CourseRepository.GetCountAsync(x => x.Title == course.Title
                    && x.Id != course.Id);

            if (count > 0)
                throw new InvalidOperationException("Course already exists");

            var existingCourse = _courseUnitOfWork.CourseRepository.GetById(course.Id);
            existingCourse.Title = course.Title;
            existingCourse.SeatCount = course.SeatCount;
            existingCourse.Fee = course.Fee;
            await _courseUnitOfWork.SaveAsync();
        }

        public async Task AddAsync(Course course)
        {
            await _courseUnitOfWork.CourseRepository.AddAsync(course);
            await _courseUnitOfWork.SaveAsync();
        }

        public async Task<Course> DeleteAsync(int id)
        {
            var course = await GetCourseByIdAsync(id);
            if (course == null) throw new Exception("No Course found");
            await _courseUnitOfWork.CourseRepository.RemoveAsync(id);
            await _courseUnitOfWork.SaveAsync();

            return course;
        }
    }
}
