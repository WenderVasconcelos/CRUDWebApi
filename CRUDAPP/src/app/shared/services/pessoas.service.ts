import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pessoa} from "../command/pessoa";

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

  listarPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.url);
  }

  pegarPeloId(dado: Pessoa): Observable<Pessoa> {
    return this.http.get<Pessoa>(this.url + '/' + dado.pessoaId);
  }

  salvarPessoa(pessoa: Pessoa): Observable<any> {
    return this.http.post(this.url, pessoa, httpOptions);
  }

  atualizarPessoa(pessoa: Pessoa): Observable<any> {
    return this.http.put(this.url + '/' + pessoa.pessoaId, pessoa, httpOptions);
  }

  deletarPessoa(pessoa: Pessoa): Observable<any> {
    return this.http.delete(this.url + '/' + pessoa.pessoaId);
  }
}
