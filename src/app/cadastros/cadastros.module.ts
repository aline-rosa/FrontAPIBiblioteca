import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AutorComponent } from './autor/autor.component';
import { CadastrosRoutingModule } from './cadastros-routing.module';
import { LivrosComponent } from './livros/livros.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [
    LivrosComponent,
    UsuariosComponent,
    AutorComponent
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
