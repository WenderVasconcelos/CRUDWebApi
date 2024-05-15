import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Pessoa} from "../../shared/command/pessoa";
import {PessoasService} from "../../shared/services/pessoas.service";

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.scss'
})
export class PessoasComponent {
  formulario: any;
  tituloFormulario: string;
  pessoas: Pessoa[];
  visibilidadeTabela: boolean = true;
  visibilidadeFormulario: boolean = false;

  constructor(private pessoasService: PessoasService) {
  }

  ngOnInit(): void {
    this.pegarTodos();

  }

  ExibirFormularioCadastro(): void {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.tituloFormulario = 'Nova Pessoa';
    this.formulario = new FormGroup({
      nome: new FormControl(null, [Validators.required]),
      sobrenome: new FormControl(null, [Validators.required]),
      idade: new FormControl(null, [Validators.required]),
      profissao: new FormControl(null, [Validators.required]),
      altura: new FormControl(null, [Validators.required]),
    });
  }

  EnviarFormulario(): void {
    const pessoa: Pessoa = this.formulario.value;

    this.pessoasService
      .salvarPessoa(pessoa).subscribe({
      next: (resultado) => {
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;
        alert('Pessoa salva com sucesso!');
        this.pessoasService.getPessoas().subscribe({
          next: (dados) => {
            this.pessoas = dados;
          },
          error: (error) => {
            alert('Erro ao pegar pessoas');
          }
        });
      },
      error: (error) => {
        alert('Erro ao salvar pessoa');
      }
    })
  }

  pegarTodos(): void {
    this.pessoasService.getPessoas().subscribe({
      next: (resultado) => {
        this.pessoas = resultado;
      },
      error: (error) => {
        alert('Erro ao pegar pessoas');
      }
    })
  }

  voltar() {
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }
}
