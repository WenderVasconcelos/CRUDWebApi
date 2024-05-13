import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.scss'
})
export class PessoasComponent {

  @Input() nome:string = '';
  @Input() sobrenome:string = '';
  @Input() idade:number = 0;
  @Input() profissao:string = '';
  @Input() altura:number = 0;
}
