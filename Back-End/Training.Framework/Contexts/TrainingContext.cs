using Microsoft.EntityFrameworkCore;
using Training.Framework.Entities;

namespace Training.Framework.Contexts
{
    public class TrainingContext : DbContext
    {
        public TrainingContext()
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder)
        {
            base.OnConfiguring(dbContextOptionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<StudentRegistration>()
                .HasKey(pc => new { pc.StudentId, pc.CourseId });

            modelBuilder.Entity<StudentRegistration>()
                .HasOne(pc => pc.Student)
                .WithMany(p => p.StudentRegistration)
                .HasForeignKey(pc => pc.StudentId);

            modelBuilder.Entity<StudentRegistration>()
                .HasOne(pc => pc.Course)
                .WithMany(p => p.StudentRegistration)
                .HasForeignKey(pc => pc.CourseId);

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Student> Students { get; set; }
        public DbSet<Course> Courses { get; set; }
    }
}
