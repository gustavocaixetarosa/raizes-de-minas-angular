import { Routes } from '@angular/router';
import { ClienteFormComponent } from './clientes/containers/cliente-form/cliente-form.component';

export const APP_ROUTES: Routes = [
  {path: '',  pathMatch: 'full', redirectTo: 'clientes'},
  {path: 'clientes',
    loadChildren: ()  => import('./clientes/clientes.routes').then(m => m.CLIENTES_ROUTES)
  },
  { path: 'clientes/edit/:id', component: ClienteFormComponent },
  {path: 'produtos',
    loadChildren: () => import('./produtos/produtos.routes').then(m => m.PRODUTOS_ROUTES)
  },
  { path: 'vendas', loadChildren: () => import('./vendas/vendas.routes').then(m => m.VENDAS_ROUTES)}
];
