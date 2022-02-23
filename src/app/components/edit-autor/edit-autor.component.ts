import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from 'src/app/modelos/autor';
import { ServiceAutorService } from 'src/app/servicos/service-autor.service';

@Component({
  selector: 'app-edit-autor',
  templateUrl: './edit-autor.component.html',
  styleUrls: ['./edit-autor.component.scss']
})
export class EditAutorComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private apiService: ServiceAutorService,
    private router: Router
  ) { }

  autorForm = this.fb.group({
    id: [Validators.required],
    nome: ['', Validators.required],
    descricao: ['', Validators.required],
  });

  editAutor(){
    const autor: Autor = this.autorForm.value
    autor.id = this.route.snapshot.params['id']

    this.apiService.updateAutor(autor).subscribe()
  }

  deleteAutor(){
    const autor: Autor = this.autorForm.value
    autor.id = this.route.snapshot.params['id']

    this.apiService.deleteAutor(autor).subscribe(() => this.router.navigate(['autores']))
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']

    this.apiService.getAutor(id).subscribe((autor) => {
      this.autorForm.patchValue(autor)
    })
  }
}
