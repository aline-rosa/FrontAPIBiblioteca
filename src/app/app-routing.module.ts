import { UsuariosComponent } from './cadastros/usuarios/usuarios.component';
import { TesteComponent } from './teste/teste.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'teste',
  },
  {
    path: 'teste',
    component: TesteComponent
  },
  {
    path: 'cadastros',
    loadChildren: () =>
      import('./cadastros/cadastros.module').then((c) => c.CadastrosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
