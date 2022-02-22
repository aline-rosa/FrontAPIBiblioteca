import { Livro } from './../../modelos/livro';
import { ServiceLivroService } from './../../servicos/service-livro.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {

  constructor(
    private apiService: ServiceLivroService,
    private fb: FormBuilder
  ) {}

  livros$?: Observable<Livro[]>;

  livroForm = this.fb.group({
    titulo: ['', Validators.required],
    autor: ['', Validators.required],
    paginas: ['', Validators.required],
    disponivel: ['', Validators.required],
    atrasado: ['', Validators.required],
  });

  addLivro() {
    const livro: Livro = this.livroForm.value;

    this.apiService.addLivro(livro).subscribe({
      next: () => {
        this.livroForm.reset();
        this.livros$ = this.apiService.listLivro();
      },
    });
  }

  ngOnInit(): void {
    this.livros$ = this.apiService.listLivro();
  }
}
