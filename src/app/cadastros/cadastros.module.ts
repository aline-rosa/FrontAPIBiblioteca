import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrosRoutingModule } from './cadastros-routing.module';
import { LivrosComponent } from './livros/livros.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LivrosComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    CadastrosRoutingModule,
    ReactiveFormsModule,
    FormBuilder,
    FormsModule
  ]
})
export class CadastrosModule { }
