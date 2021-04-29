using System;
using System.Collections.Generic;
using System.Text;
using Training.Data;

namespace Training.Framework.Entities
{
    public class StudentRegistration : IEntity<int>
    {
        public int Id { get; set; }
        public Student Student { get; set; }
        public int StudentId { get; set; }
        public Course Course { get; set; }
        public int CourseId { get; set; }
        public DateTime EnrollDate { get; set; }
        public bool IsPaymentComplete { get; set; }
    }
}
