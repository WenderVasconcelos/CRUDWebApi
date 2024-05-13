using CRUDAPI.EFCore.Application.Context;
using CRUDAPI.EFCore.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace CRUDAPI.EFCore.Infrastructure
{
    public class CRUDAPICoreDBContext : DbContext, ICRUDAPIEFCoreDBContext
    {
        public CRUDAPICoreDBContext(DbContextOptions<CRUDAPICoreDBContext> options) : base(options)
        {

        }
        public DbSet<Pessoa> Pessoas { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            base.OnModelCreating(modelBuilder);
        }
    }
}
