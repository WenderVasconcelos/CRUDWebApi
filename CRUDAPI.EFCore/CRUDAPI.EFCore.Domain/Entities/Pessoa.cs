namespace CRUDAPI.EFCore.Domain.Entities
{
    public class Pessoa
    {
        public Guid PessoaId { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public int Idade { get; set; }
        public string Profissao { get; set; }
        public double Altura { get; set; }
    }
}
