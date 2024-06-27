import { produtoResolver } from './guards/produto.resolver';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoComponent } from './produto/produto.component';

export const PRODUTOS_ROUTES = [
  { path: '', component: ProdutoComponent },
  { path: 'new', component: ProdutoFormComponent, resolve: { produto: produtoResolver }},
  { path: 'edit/:id', component: ProdutoFormComponent, resolve: { produto: produtoResolver}}
];
