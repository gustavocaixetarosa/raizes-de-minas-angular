import { VendasService } from './../services/vendas.service';
import { Component } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Venda } from '../model/venda';
import { MatDialog } from '@angular/material/dialog';
import { MatCard } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-venda',
  standalone: true,
  imports: [
    MatCard,
    MatToolbar,
    MatProgressSpinner,
    AsyncPipe,
  ],
  templateUrl: './venda.component.html',
  styleUrl: './venda.component.scss'
})
export class VendaComponent {

  vendas$!: Observable<Venda[]>;
  displayedColumns = ['id', 'valorTotal', 'quantidadeTotal', 'dataVenda',
                           'obs', 'formaDePagamento', 'cliente'];

  constructor(
    private VendasService: VendasService,
    public dialog: MatDialog,
    public router: Router,
    public route: ActivatedRoute,
    public snackBar: MatSnackBar
  ){ this.refresh() }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(venda: Venda) {
    this.router.navigate(['edit', venda.id], {relativeTo: this.route});
  }

  onDelete(venda: Venda) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que quer remover o cliente?',
    });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.VendasService.delete(venda.id!).subscribe( () => {
          this.refresh();
          this.snackBar.open('Venda removida com sucesso', '',{ duration: 3000, verticalPosition: 'top', horizontalPosition: 'center'});
        })
      }
    });
  }

  refresh() {
    this.vendas$ = this.VendasService.list().pipe(catchError( erro => {
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

