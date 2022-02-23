import { Livro } from './../../modelos/livro';
import { ServiceLivroService } from './../../servicos/service-livro.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-livro',
  templateUrl: './edit-livro.component.html',
  styleUrls: ['./edit-livro.component.scss'],
})
export class EditLivroComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private apiService: ServiceLivroService,
    private router: Router
  ) {}

  livroForm = this.fb.group({
    id: [Validators.required],
    titulo: ['', Validators.required],
    genero: ['', Validators.required],
    paginas: ['', Validators.required],
    AutorId: ['', Validators.required],
  });

  deleteForm = this.fb.group({
    id: [Validators.required],
  });

  editLivro() {
    const livro: Livro = this.livroForm.value;
    livro.id = this.route.snapshot.params['id'];

    this.apiService.updateLivro(livro).subscribe();
  }

  removeLivro() {
    const livro: Livro = this.deleteForm.value;
    livro.id = this.route.snapshot.params['id'];

    this.apiService
      .deleteLivro(livro)
      .subscribe(() => this.router.navigate(['livros']));
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.apiService.getLivro(id).subscribe((livro) => {
      this.livroForm.patchValue(livro);
    });
  }
}
