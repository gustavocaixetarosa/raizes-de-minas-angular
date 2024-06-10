import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../model/cliente';
import { of } from 'rxjs';

export const clienteResolver: ResolveFn<Cliente> = (route, state) => {
  const clienteId = route.paramMap.get('id');
  if (clienteId != null) {
    const numberId = +clienteId;
    return inject(ClientesService).loadById(numberId)
  }
  return of({id: null, nome: '', endereco: '', telefone: ''})

};
