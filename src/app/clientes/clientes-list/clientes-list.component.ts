import { Component, Input } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrl: './clientes-list.component.scss'
})
export class ClientesListComponent {

  @Input() clientes: Cliente[]  = [];
  readonly displayedColumns = ['nome', 'endereco', 'telefone','actions'];

  constructor(
    public router: Router,
    public route: ActivatedRoute){

  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
