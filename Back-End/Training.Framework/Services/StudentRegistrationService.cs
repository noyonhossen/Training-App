using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Training.Framework.Entities;
using Training.Framework.UnitOfWorks;

namespace Training.Framework.Services
{
    public class StudentRegistrationService : IStudentRegistrationService
    {
        private readonly IStudentRegistrationUnitOfWork _studentRegistrationUnitOfWork;

        public StudentRegistrationService(IStudentRegistrationUnitOfWork studentRegistrationUnitOfWork)
        {
            _studentRegistrationUnitOfWork = studentRegistrationUnitOfWork;
        }

        public async Task<IList<StudentRegistration>> GetAllStudentRegistrationAsync()
        {
            return await _studentRegistrationUnitOfWork.StudentRegistrationRepository.GetAllAsync();
        }

        public async Task<StudentRegistration> GetStudentRegistrationByIdAsync(int id)
        {
            return await _studentRegistrationUnitOfWork.StudentRegistrationRepository.GetByIdAsync(id);
        }

        public async Task UpdateAsync(StudentRegistration studentRegistration)
        {
            var existingStudentRegistration = _studentRegistrationUnitOfWork.StudentRegistrationRepository.GetById(studentRegistration.Id);
            existingStudentRegistration.StudentId = studentRegistration.StudentId;
            existingStudentRegistration.CourseId = studentRegistration.CourseId;
            existingStudentRegistration.EnrollDate = studentRegistration.EnrollDate;
            existingStudentRegistration.IsPaymentComplete = studentRegistration.IsPaymentComplete;
            await _studentRegistrationUnitOfWork.SaveAsync();
        }

        public async Task AddAsync(StudentRegistration studentRegistration)
        {
            await _studentRegistrationUnitOfWork.StudentRegistrationRepository.AddAsync(studentRegistration);
            await _studentRegistrationUnitOfWork.SaveAsync();
        }

        public async Task<StudentRegistration> DeleteAsync(int id)
        {
            var studentRegistration = await GetStudentRegistrationByIdAsync(id);
            if (studentRegistration == null) throw new Exception("No StudentRegistration found");
            await _studentRegistrationUnitOfWork.StudentRegistrationRepository.RemoveAsync(id);
            await _studentRegistrationUnitOfWork.SaveAsync();

            return studentRegistration;
        }
    }
}
