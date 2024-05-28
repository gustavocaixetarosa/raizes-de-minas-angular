import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Cliente } from '../model/cliente';
import { ClientesService } from '../services/clientes.service';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent implements OnInit{

  clientes$: Observable<Cliente[]>;
  displayedColumns = ['nome', 'endereco', 'telefone','actions'];

  constructor(
    private clientesService: ClientesService,
    public dialog: MatDialog,
    public router: Router,
    public route: ActivatedRoute
  ){
    this.clientes$ = this.clientesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.');
        return of([])
      })
    );
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onError(errorMsg: String)  {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    })
  }

  ngOnInit(): void {

  }



}
