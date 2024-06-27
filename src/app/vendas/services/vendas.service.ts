import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Venda } from './../model/venda';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  private API = 'api/vendas';
  constructor(private httpCliente: HttpClient) { }

  list() {
    return this.httpCliente.get<Venda[]>(this.API).pipe(first(), tap(venda => console.log(venda)));
  }

  loadById(id: number) {
    return this.httpCliente.get<Venda>(`${this.API}/${id}`);
  }

  save(record: Partial<Venda>) {
    if (record.id)
      return this.update(record);
    return this.create(record);
  }

  private create(record: Partial<Venda>) {
    return this.httpCliente.post<Venda>(this.API, record).pipe(first());
  }

  private update(record: Partial<Venda>) {
    return this.httpCliente.put<Venda>(`${this.API}/${record.id}`, record).pipe(first());
  }

  public delete(id: number) {
    return this.httpCliente.delete<Venda>(`${this.API}/${id}`).pipe(first());
  }
}
