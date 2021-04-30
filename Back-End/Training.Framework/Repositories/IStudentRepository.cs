using System;
using Training.Data;
using Training.Framework.Contexts;
using Training.Framework.Entities;

namespace Training.Framework.Repositories
{
    public interface IStudentRepository : IRepository<Student, int, TrainingContext>
    {

    }
}
