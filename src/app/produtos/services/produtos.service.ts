import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private API = 'api/produtos';
  constructor(private httpCliente: HttpClient) { }

  list() {
    return this.httpCliente.get<Produto[]>(this.API).pipe(first(), tap(produto => console.log(produto)));
  }

  loadById(id: number) {
    return this.httpCliente.get<Produto>(`${this.API}/${id}`);
  }

  save(record: Partial<Produto>) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Produto>) {
    return this.httpCliente.post<Produto>(this.API, record).pipe(first());
  }

  private update(record: Partial<Produto>) {
    return this.httpCliente.put<Produto>(`${this.API}/${record.id}`, record).pipe(first());
  }

  public delete(id: number) {
    return this.httpCliente.delete<Produto>(`${this.API}/${id}`).pipe(first());
  }
}
