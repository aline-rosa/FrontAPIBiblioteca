import { ServiceUsuarioService } from './../../servicos/service-usuario.service';
import { Usuario } from './../../modelos/usuario';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  constructor(
    private apiService: ServiceUsuarioService,
    private fb: FormBuilder
  ) {}

  usuarios$?: Observable<Usuario[]>;

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
    console.log(this.apiService.listUsuario())
    console.log("Olá usuario")
  }
}
