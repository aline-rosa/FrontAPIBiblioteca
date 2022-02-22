import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrosRoutingModule } from './cadastros-routing.module';
import { LivrosComponent } from './livros/livros.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [
    LivrosComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    CadastrosRoutingModule
  ]
})
export class CadastrosModule { }
