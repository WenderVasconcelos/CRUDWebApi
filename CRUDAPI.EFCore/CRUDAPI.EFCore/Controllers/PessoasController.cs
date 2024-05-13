using CRUDAPI.EFCore.Domain.Entities;
using CRUDAPI.EFCore.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CRUDAPI.EFCore.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class PessoasController : ControllerBase
    {
        private readonly CRUDAPICoreDBContext _context;

        public PessoasController(CRUDAPICoreDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pessoa>>> GetPessoasAsync()
        {
            return await _context.Pessoas.ToListAsync();
        }

        [HttpGet("{pessoaId}")]
        public async Task<ActionResult<Pessoa>> GetPessoaIdAsync(Guid pessoaId)
        {
            var pessoa = await _context.Pessoas.FindAsync(pessoaId);

            if (pessoa == null)
            {
                return NotFound();
            }

            return pessoa;
        }

        [HttpPost]
        public async Task<ActionResult<Pessoa>> SavePessoaAsync(Pessoa pessoa)
        {
            await _context.Pessoas.AddAsync(pessoa);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult<Pessoa>> UpdatePessoaAsync(Pessoa pessoa)
        {
            _context.Pessoas.Update(pessoa);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{pessoaId}")]
        public async Task<ActionResult<Pessoa>> DeletePessoaAsync(Guid pessoaId)
        {
            var pessoa = await _context.Pessoas.FindAsync(pessoaId);

            if (pessoa == null)
            {
                return NotFound();
            }

            _context.Pessoas.Remove(pessoa);
            await _context.SaveChangesAsync();

            return Ok();
        }

    }
}

