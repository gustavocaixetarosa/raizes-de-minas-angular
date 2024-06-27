import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';

import { Venda } from '../../model/venda';

@Component({
  selector: 'app-vendas-list',
  standalone: true,
  imports: [MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatMiniFabButton, MatIcon, MatIconButton, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow],
  templateUrl: './vendas-list.component.html',
  styleUrl: './vendas-list.component.scss'
})
export class VendasListComponent {

  @Input() vendas: Venda[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  readonly displayedColumns = ['id', 'valorTotal', 'quantidadeTotal', 'dataVenda',
    'obs', 'formaDePagamento', 'cliente'];

  onAdd() {
    this.add.emit(true);
  }

  onEdit(venda: Venda) {
    this.edit.emit(venda);
  }

  onDelete(venda: Venda){
    this.delete.emit(venda);
  }
}
