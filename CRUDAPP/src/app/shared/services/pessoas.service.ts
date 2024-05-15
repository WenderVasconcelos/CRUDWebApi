import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pessoa} from "../command/pessoa";
import {environment} from "../../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private http: HttpClient) {  }

  salvarPessoa(pessoa: Pessoa): Observable<any> {
    return this.http.post(environment.apiUrl + 'pessoas', pessoa, httpOptions);
  }

  getPessoas(): Observable<any> {
    return this.http.get(environment.apiUrl + 'pessoas');
  }
}
