using Training.Data;
using Training.Framework.Repositories;

namespace Training.Framework.UnitOfWorks
{
    public interface IStudentUnitOfWork : IUnitOfWork
    {
        IStudentRepository StudentRepository { get; set; }
    }
}
