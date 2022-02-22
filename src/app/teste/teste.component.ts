import { Usuario } from './../modelos/usuario';
// import { ServiceUsuarioService } from './../../servicos/service-usuario.service';
// import { Usuario } from './../../modelos/usuario';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceUsuarioService } from '../servicos/service-usuario.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss'],
})
export class TesteComponent implements OnInit {
  constructor(
    private apiService: ServiceUsuarioService,
    private fb: FormBuilder
  ) {}

  usuarios$!: Observable<Usuario[]>;

  usuarioForm = this.fb.group({
    nome: ['', Validators.required],
    email: ['', Validators.required],
  });

  addUsuario() {
    const usuario: Usuario = this.usuarioForm.value;

    this.apiService.addUsuario(usuario).subscribe({
      next: () => {
        this.usuarioForm.reset();
        this.usuarios$ = this.apiService.listUsuario();
      },
    });
  }

  ngOnInit(): void {
    // this.usuarios$ = this.apiService.listUsuario();
    this.usuarios$ = this.apiService.listUsuario()
    console.log(this.apiService.listUsuario())
    console.log('Olá usuario');
  }
}
