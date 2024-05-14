import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {PessoaCommand} from "../command/pessoa";
import {environment} from "../../../environments/environment";
import {PessoasComponent} from "../../components/pessoas/pessoas.component";

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

  salvarPessoa(pessoa: PessoaCommand): Observable<any> {
    return this.http.post(environment.apiUrl + 'pessoas', pessoa, httpOptions);
  }

  teste() {
    return this.http.get("https://localhost:7006/api/pessoas");
  }
}
