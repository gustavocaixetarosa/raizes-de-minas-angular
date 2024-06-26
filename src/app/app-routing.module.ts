import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteFormComponent } from './clientes/containers/cliente-form/cliente-form.component';

const routes: Routes = [
  {path: '',  pathMatch: 'full', redirectTo: 'clientes'},
  {path: 'clientes',
    loadChildren: ()  => import('./clientes/clientes.module').then(m => m.ClientesModule),
  },
  { path: 'clientes/edit/:id', component: ClienteFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
