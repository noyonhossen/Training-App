using System;
using System.Collections.Generic;
using Training.Data;

namespace Training.Framework.Entities
{
    public class Student : IEntity<int>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public IList<StudentRegistration> StudentRegistration { get; set; }
    }
}
