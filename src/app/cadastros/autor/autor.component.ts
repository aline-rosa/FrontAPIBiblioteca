import { Autor } from './../../modelos/autor';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceAutorService } from './../../servicos/service-autor.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss']
})
export class AutorComponent implements OnInit {

  constructor(
    private apiService: ServiceAutorService,
    private fb: FormBuilder
  ) {}

  autor$?: Observable<Autor[]>;

  autorForm = this.fb.group({
    nome: ['', Validators.required],
    email: ['', Validators.required],
  });

  addAutor() {
    const usuario: Autor = this.autorForm.value;

    this.apiService.addAutor(usuario).subscribe({
      next: () => {
        this.autorForm.reset();
        this.autor$ = this.apiService.listAutor();
      },
    });
  }

  ngOnInit(): void {
    this.autor$ = this.apiService.listAutor();
  }
}
