using Training.Data;
using Training.Framework.Contexts;
using Training.Framework.Entities;

namespace Training.Framework.Repositories
{
    public class StudentRegistrationRepository : Repository<StudentRegistration, int, TrainingContext>, IStudentRegistrationRepository
    {
        public StudentRegistrationRepository(TrainingContext dbContext) : base(dbContext)
        {

        }
    }
}
