import { Routes } from '@angular/router';

import { ClienteFormComponent } from './containers/cliente-form/cliente-form.component';
import { ClientesComponent } from './containers/clientes/clientes.component';
import { clienteResolver } from './guards/cliente.resolver';

export const CLIENTES_ROUTES: Routes = [
  { path: '', component: ClientesComponent},
  { path: 'new', component: ClienteFormComponent ,  resolve: { cliente: clienteResolver }},
  { path: 'edit/:id', component: ClienteFormComponent, resolve: { cliente: clienteResolver}  }
];
