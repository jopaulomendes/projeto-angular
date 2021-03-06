import { AppConstants } from './../app-constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  list(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl);
  }

  findById(id): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + id)
  }

  delete(id: Number): Observable<any> {
    return this.http.delete(AppConstants.baseUrl + id, { responseType: 'text' });
  }

  findByUser(nome: String): Observable<any> {
    return this.http.get(AppConstants.baseUrl + "pesquisarUsuario/" + nome);
  }

  save(usuario): Observable<any> {
    return this.http.post<any>(AppConstants.baseUrl, usuario);
  }

  update(usuario): Observable<any> {
    return this.http.put<any>(AppConstants.baseUrl, usuario);
  }

  validaToken(){
    if (localStorage.getItem('token') !== null && localStorage.getItem('token').trim() !== null) {
      return true;
    }
    return false;
  }
}
