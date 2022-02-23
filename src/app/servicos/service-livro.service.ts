import { Livro } from './../modelos/livro';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceLivroService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/livros';

  listLivro() {
    return this.http.get<Livro[]>(`${this.url}/listar`);
  }

  getLivro(id: string) {
    return this.http.get<Livro>(`${this.url}/${id}`);
  }

  addLivro(livro: Livro) {
    return this.http.post<Livro>(`${this.url}/add`, livro);
  }

  updateLivro(livro: Livro) {
    return this.http.post<Livro>(`${this.url}/atualizar`, livro);
  }

  deleteLivro(livro: Livro) {
    return this.http.post<Livro>(`${this.url}/remover`, livro);
  }
}
