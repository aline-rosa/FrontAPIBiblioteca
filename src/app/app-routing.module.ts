import { EditLivroComponent } from './components/edit-livro/edit-livro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutorComponent } from './components/autor/autor.component';
import { LivrosComponent } from './components/livros/livros.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HomeComponent } from './home/home.component';
import { EditAutorComponent } from './components/edit-autor/edit-autor.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
  },
  {
    path: 'livros',
    component: LivrosComponent,
  },
  {
    path: 'livros/:id',
    component: EditLivroComponent
  },
  {
    path: 'autores',
    component: AutorComponent,
  },
  {
    path: 'autores/:id',
    component: EditAutorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
