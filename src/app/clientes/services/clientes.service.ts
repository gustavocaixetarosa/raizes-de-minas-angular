import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private API = 'api/clientes';
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Cliente[]>(this.API)
    .pipe(
      first(),
      tap(clientes => console.log(clientes))
    );
  }

  loadById(id: number) {
    return this.httpClient.get<Cliente>(`${this.API}/${id}`);
  }

  save(record: Partial<Cliente>) {

    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Cliente>){
    return this.httpClient.post<Cliente>(this.API, record).pipe(first());
  }

  private update(record: Partial<Cliente>) {
    return this.httpClient.put<Cliente>(`${this.API}/${record.id}`, record).pipe(first());
  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
