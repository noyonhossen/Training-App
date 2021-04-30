using Training.Data;
using Training.Framework.Contexts;
using Training.Framework.Repositories;

namespace Training.Framework.UnitOfWorks
{
    public class StudentUnitOfWork : UnitOfWork, IStudentUnitOfWork
    {
        public IStudentRepository StudentRepository { get; set; }

        public StudentUnitOfWork(TrainingContext context,
            IStudentRepository studentRepository)
            : base(context)
        {
            StudentRepository = studentRepository;
        }
    }
}
