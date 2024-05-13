using CRUDAPI.EFCore.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace CRUDAPI.EFCore.Application.Context
{
    public interface ICRUDAPIEFCoreDBContext
    {
        DatabaseFacade Database { get; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
        DbSet<Pessoa> Pessoas { get; set; }
    }
}
