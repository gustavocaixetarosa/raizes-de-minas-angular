import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Cliente } from '../../model/cliente';
import { ClientesService } from '../../services/clientes.service';
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent implements OnInit{

  clientes$!: Observable<Cliente[]>;
  displayedColumns = ['nome', 'endereco', 'telefone','actions'];

  constructor(
    private clientesService: ClientesService,
    public dialog: MatDialog,
    public router: Router,
    public route: ActivatedRoute,
    public snackbar: MatSnackBar
  ){
    this.refresh();
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(cliente: Cliente) {
    this.router.navigate(['edit', cliente.id], {relativeTo: this.route});
  }

  onDelete(cliente: Cliente) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que quer remover o cliente?',
    });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.clientesService.delete(cliente.id!).subscribe(
          () => {
            this.refresh();
            this.snackbar.open('Cliente removido com sucesso', '', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          }),
          () => this.onError('Erro ao tentar remover curso')
        };
      })
    }

  refresh(){
    this.clientes$ = this.clientesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.');
        return of([])
      })
    );
  }

  onError(errorMsg: string)  {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    })
  }

  ngOnInit(): void{};
}
