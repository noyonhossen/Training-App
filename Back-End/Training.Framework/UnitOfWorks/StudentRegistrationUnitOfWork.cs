using Training.Data;
using Training.Framework.Contexts;
using Training.Framework.Repositories;

namespace Training.Framework.UnitOfWorks
{
    public class StudentRegistrationUnitOfWork : UnitOfWork, IStudentRegistrationUnitOfWork
    {
        public IStudentRegistrationRepository StudentRegistrationRepository { get; set; }

        public StudentRegistrationUnitOfWork(TrainingContext context,
            IStudentRegistrationRepository studentRegistrationRepository)
            : base(context)
        {
            StudentRegistrationRepository = studentRegistrationRepository;
        }
    }
}
