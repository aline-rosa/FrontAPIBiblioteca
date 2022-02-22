import { Usuario } from './../modelos/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceUsuarioService {

  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/usuario';

  listUsuario() {
    return this.http.get<Usuario[]>(`${this.url}/listar`);
  }

  getUsuario(id: string) {
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  addUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(`${this.url}/add`, usuario);
  }

  updateUsuario(livro: Usuario) {
    return this.http.patch<Usuario>(
      `${this.url}/atualizar`,
      livro
    );
  }

  deleteUsuario() {
    return this.http.delete<void>(`${this.url}/remover`);
  }
}
