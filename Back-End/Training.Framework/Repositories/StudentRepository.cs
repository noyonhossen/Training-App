using Training.Data;
using Training.Framework.Contexts;
using Training.Framework.Entities;

namespace Training.Framework.Repositories
{
    public class StudentRepository : Repository<Student, int, TrainingContext>, IStudentRepository
    {
        public StudentRepository(TrainingContext dbContext) : base(dbContext)
        {

        }
    }
}
