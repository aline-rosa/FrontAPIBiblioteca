import { Autor } from './../modelos/autor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAutorService {

  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/autores';

  listAutor() {
    return this.http.get<Autor[]>(`${this.url}/`);
  }

  getAutor(id: string) {
    return this.http.get<Autor>(`${this.url}/${id}`);
  }

  addAutor(autor: Autor) {
    return this.http.post<Autor>(`${this.url}/add`, autor);
  }

  updateAutor(autor: Autor) {
    return this.http.patch<Autor>(
      `${this.url}/atualizar`, autor
    );
  }

  deleteAutor() {
    return this.http.delete<void>(`${this.url}/remover`);
  }
}
