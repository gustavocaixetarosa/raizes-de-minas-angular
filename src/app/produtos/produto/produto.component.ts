import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbar } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ClientesListComponent } from '../../clientes/components/clientes-list/clientes-list.component';
import { ConfirmationDialogComponent } from '../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Produto } from '../model/produto';
import { ProdutosService } from '../services/produtos.service';
import { ProdutosListComponent } from '../components/produtos-list/produtos-list.component';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [MatCard,
    MatToolbar,
    ClientesListComponent,
    MatProgressSpinner,
    AsyncPipe,
    ProdutosListComponent
  ],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss'
})
export class ProdutoComponent{

  produtos$!: Observable<Produto[]>;
  displayedColumns = ['nome', 'peso', 'quantidade', 'descricao', 'actions'];

  constructor(
    private produtosService: ProdutosService,
    public dialog: MatDialog,
    public router: Router,
    public route: ActivatedRoute,
    public snackBar: MatSnackBar
  ){
    this.refresh();
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(produto: Produto) {
    this.router.navigate(['edit', produto.id], {relativeTo: this.route});
  }

  onDelete(produto: Produto) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que quer remover o cliente?',
    });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.produtosService.delete(produto.id!).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Produto removido com sucesso', '', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          })
      }
    });
  }

  refresh(){
    this.produtos$ = this.produtosService.list().pipe(
      catchError( erro => {
        this.onError('Erro ao carregar produtos');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}

