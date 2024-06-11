import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Cliente } from '../../model/cliente';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrl: './clientes-list.component.scss'
})
export class ClientesListComponent {

  @Input() clientes: Cliente[]  = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  readonly displayedColumns = ['nome', 'endereco', 'telefone','actions'];

  constructor() { }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(cliente: Cliente){
    this.edit.emit(cliente);
  }

  onDelete(cliente: Cliente){
    this.delete.emit(cliente);
  }


}
