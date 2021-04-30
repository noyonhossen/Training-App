using System.Collections.Generic;
using Training.Data;

namespace Training.Framework.Entities
{
    public class Course : IEntity<int>
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int SeatCount { get; set; }
        public int Fee { get; set; }
        public IList<StudentRegistration> StudentRegistration { get; set; }
    }
}
