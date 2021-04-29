using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Training.Framework.Entities;
using Training.Framework.UnitOfWorks;

namespace Training.Framework.Services
{
    public class StudentService : IStudentService
    {
        private readonly IStudentUnitOfWork _studentUnitOfWork;

        public StudentService(IStudentUnitOfWork studentUnitOfWork)
        {
            _studentUnitOfWork = studentUnitOfWork;
        }

        public async Task<IList<Student>> GetAllStudentAsync()
        {
            return await _studentUnitOfWork.StudentRepository.GetAllAsync();
        }

        public async Task<Student> GetStudentByIdAsync(int id)
        {
            return await _studentUnitOfWork.StudentRepository.GetByIdAsync(id);
        }

        public async Task UpdateAsync(Student student)
        {
            var count = await _studentUnitOfWork.StudentRepository.GetCountAsync(x => x.Name == student.Name
                    && x.Id != student.Id);

            if (count > 0)
                throw new InvalidOperationException("Student already exists");

            var existingStudent = _studentUnitOfWork.StudentRepository.GetById(student.Id);
            existingStudent.Name = student.Name;
            existingStudent.DateOfBirth = student.DateOfBirth;
            await _studentUnitOfWork.SaveAsync();
        }

        public async Task AddAsync(Student student)
        {
            await _studentUnitOfWork.StudentRepository.AddAsync(student);
            await _studentUnitOfWork.SaveAsync();
        }

        public async Task<Student> DeleteAsync(int id)
        {
            var student = await GetStudentByIdAsync(id);
            if (student == null) throw new Exception("No student found");
            await _studentUnitOfWork.StudentRepository.RemoveAsync(id);
            await _studentUnitOfWork.SaveAsync();

            return student;
        }
    }
}
