using Training.Data;
using Training.Framework.Repositories;

namespace Training.Framework.UnitOfWorks
{
    public interface IStudentRegistrationUnitOfWork : IUnitOfWork
    {
        IStudentRegistrationRepository StudentRegistrationRepository { get; set; }
    }
}
