import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {PessoaCommand} from "../command/pessoa";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  url = 'http://localhost:7006/api/pessoas';

  constructor(private http: HttpClient) {
  }

  listarPessoas(): Observable<PessoaCommand[]> {
    return this.http.get<PessoaCommand[]>(this.url);
  }

  pegarPeloId(dado: PessoaCommand): Observable<PessoaCommand> {
    return this.http.get<PessoaCommand>(this.url + '/' + dado.pessoaId);
  }

  salvarPessoa(pessoa: PessoaCommand): Observable<any> {
    return this.http.post(this.url, pessoa, httpOptions);
  }

  atualizarPessoa(pessoa: PessoaCommand): Observable<any> {
    return this.http.put(this.url + '/' + pessoa.pessoaId, pessoa, httpOptions);
  }

  deletarPessoa(pessoa: PessoaCommand): Observable<any> {
    return this.http.delete(this.url + '/' + pessoa.pessoaId);
  }
}
