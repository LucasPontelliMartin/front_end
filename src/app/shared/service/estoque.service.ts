import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { estoque } from './model/estoque.model';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  
  apiUrl: string = "http://localhost8080/estoque";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  };
  constructor(
    private _httpClient: HttpClient
  ) { }

  public GetProdutos(flag: string): Observable<estoque>{
    return this._httpClient.get<estoque>(this.apiUrl);
  }
}
