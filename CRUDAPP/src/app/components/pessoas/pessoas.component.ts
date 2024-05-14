import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PessoaCommand} from "../../shared/command/pessoa";
import {PessoasService} from "../../shared/services/pessoas.service";

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.scss'
})
export class PessoasComponent {
  formulario: any;
  tituloFormulario: string;

  constructor(private pessoasService: PessoasService) {
  }

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Pessoas';
    this.formulario = new FormGroup({
      nome: new FormControl(null, [Validators.required]),
      sobrenome: new FormControl(null, [Validators.required]),
      idade: new FormControl(null, [Validators.required]),
      profissao: new FormControl(null, [Validators.required]),
      altura: new FormControl(null, [Validators.required]),
    });
  }

  EnviarFormulario():void {
    const pessoa: PessoaCommand = this.formulario.value;

    this.pessoasService
      .salvarPessoa(pessoa).subscribe({
        next: (resultado) => {
          alert('Pessoa salva com sucesso!');
          this.formulario.reset();
        },
        error: (error) => {
          alert('Erro ao salvar pessoa');
        }

    })
  }

  teste() {
    this.pessoasService.teste().subscribe({
      next: (resultado) => {
        return console.log(resultado);
      },
      error: (error) => {
        return console.log(error);
      }
    })
  }

}
