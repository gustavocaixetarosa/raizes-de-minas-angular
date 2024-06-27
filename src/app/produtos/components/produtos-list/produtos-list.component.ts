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

import { Produto } from '../../model/produto';

@Component({
  selector: 'app-produtos-list',
  standalone: true,
  imports: [MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatMiniFabButton, MatIcon, MatIconButton, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow],
  templateUrl: './produtos-list.component.html',
  styleUrl: './produtos-list.component.scss'
})
export class ProdutosListComponent {


  @Input() produtos: Produto[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  readonly displayedColumns = ['nome', 'peso', 'quantidade', 'descricao', 'actions'];

  constructor () {}

  onAdd() {
    this.add.emit(true);
  }

  onEdit(produto: Produto) {
    this.edit.emit(produto);
  }

  onDelete(produto: Produto) {
    this.delete.emit(produto);
  }
}
