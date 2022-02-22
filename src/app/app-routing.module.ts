import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutorComponent } from './components/autor/autor.component';
import { LivrosComponent } from './components/livros/livros.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HomeComponent } from './home/home.component';

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
    path: 'autores',
    component: AutorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
