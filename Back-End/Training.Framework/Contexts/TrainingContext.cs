using Microsoft.EntityFrameworkCore;
using Training.Framework.Entities;

namespace Training.Framework.Contexts
{
    public class TrainingContext : DbContext
    {
        private string _connectionString;
        private string _migrationAssemblyName;

        public TrainingContext(string connectionString, string migrationAssemblyName)
        {
            _connectionString = connectionString;
            _migrationAssemblyName = migrationAssemblyName;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder)
        {
            if (!dbContextOptionsBuilder.IsConfigured)
            {
                dbContextOptionsBuilder.UseSqlServer(
                    _connectionString,
                    m => m.MigrationsAssembly(_migrationAssemblyName));
            }

            base.OnConfiguring(dbContextOptionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
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
        public DbSet<StudentRegistration> StudentRegistrations { get; set; }
    }
}
