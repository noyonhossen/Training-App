using Training.Data;
using Training.Framework.Contexts;
using Training.Framework.Repositories;

namespace Training.Framework.UnitOfWorks
{
    public class CourseUnitOfWork : UnitOfWork, ICourseUnitOfWork
    {
        public ICourseRepository CourseRepository { get; set; }

        public CourseUnitOfWork(TrainingContext context,
            ICourseRepository courseRepository)
            : base(context)
        {
            CourseRepository = courseRepository;
        }
    }
}
