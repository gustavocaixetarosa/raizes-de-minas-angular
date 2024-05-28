import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, take, tap } from 'rxjs';

import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private API = 'api/clientes';
  constructor(private httpCliente: HttpClient) { }

  list() {
    return this.httpCliente.get<Cliente[]>(this.API)
    .pipe(
      first(),
      delay(500),
      tap(clientes => console.log(clientes))
    );
  }

  save(record: Cliente) {
    return this.httpCliente.post<Cliente>(this.API, record);//.pipe(first())
  }
}
