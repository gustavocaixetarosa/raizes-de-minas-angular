import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ClientesService } from '../../services/clientes.service';
import { Cliente } from './../../model/cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.scss',
})
export class ClienteFormComponent {
  form: FormGroup;
  cliente$!: Observable<Cliente>;

  constructor(
    private formBuilder: FormBuilder,
    private service: ClientesService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      id: 123,
      nome: [null],
      endereco: [null],
      telefone: [null],
    });
  }

  ngOnInit(): void {
    const cliente: Cliente = this.route.snapshot.data['cliente'];
    console.log(cliente)
  }


  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (result) => this.onSuccess,
      (error) => this.onError()
    );
    this.onCancel();
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this._snackBar.open('Cliente cadastrado com sucesso', '', {
      duration: 5000,
    });
  }

  private onError() {
    this._snackBar.open('Erro ao salvar curso', '', { duration: 5000 });
  }
}
