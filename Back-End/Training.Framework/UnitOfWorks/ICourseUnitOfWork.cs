using Training.Data;
using Training.Framework.Repositories;

namespace Training.Framework.UnitOfWorks
{
    public interface ICourseUnitOfWork : IUnitOfWork
    {
        ICourseRepository CourseRepository { get; set; }
    }
}
