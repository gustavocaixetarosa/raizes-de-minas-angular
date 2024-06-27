import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';

import { Produto } from '../model/produto';
import { ProdutosService } from '../services/produtos.service';

export const produtoResolver: ResolveFn<Produto> = (route, state) => {
  const produtoId = route.paramMap.get('id');
  if (produtoId != null) {
    const numberId = +produtoId;
    return inject(ProdutosService).loadById(numberId);
  }
  return of({id: null, nome: '', peso: '', quantidade: null, descricao: ''});
}
