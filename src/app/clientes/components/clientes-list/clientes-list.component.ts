import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Cliente } from '../../model/cliente';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton, MatIconButton } from '@angular/material/button';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';

@Component({
    selector: 'app-clientes-list',
    templateUrl: './clientes-list.component.html',
    styleUrl: './clientes-list.component.scss',
    standalone: true,
    imports: [MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatMiniFabButton, MatIcon, MatIconButton, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow]
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
