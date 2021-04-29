using Training.Data;
using Training.Framework.Contexts;
using Training.Framework.Entities;

namespace Training.Framework.Repositories
{
    public class CourseRepository : Repository<Course, int, TrainingContext>, ICourseRepository
    {
        public CourseRepository(TrainingContext dbContext) : base(dbContext)
        {

        }
    }
}
