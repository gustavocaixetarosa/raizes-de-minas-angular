import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteFormComponent } from './containers/cliente-form/cliente-form.component';
import { ClientesComponent } from './containers/clientes/clientes.component';
import { clienteResolver } from './guards/cliente.resolver';

const routes: Routes = [
  { path: '', component: ClientesComponent},
  { path: 'new', component: ClienteFormComponent ,  resolve: { cliente: clienteResolver }},
  { path: 'edit/:id', component: ClienteFormComponent, resolve: { cliente: clienteResolver}  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
