using System.Threading.Tasks;

namespace Training.Data
{
    public interface IUnitOfWork
    {
        void Save();

        Task SaveAsync();
    }
}
