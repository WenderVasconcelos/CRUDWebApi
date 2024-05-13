using CRUDAPI.EFCore.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CRUDAPI.EFCore.Infrastructure.Configurations
{
    public class PessoaConfiguration : IEntityTypeConfiguration<Pessoa>
    {
        public void Configure(EntityTypeBuilder<Pessoa> builder)
        {
            builder.ToTable("Pessoa");
            builder.Property(s => s.Nome).IsRequired();
            builder.Property(s => s.Profissao).IsRequired();
            builder.Property(s => s.Sobrenome).IsRequired();
            builder.Property(s => s.Idade).IsRequired();
            builder.Property(s => s.Altura).IsRequired();
        }
    }
}
