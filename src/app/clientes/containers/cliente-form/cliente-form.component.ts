import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { ClientesService } from '../../services/clientes.service';
import { Cliente } from './../../model/cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.scss',
})
export class ClienteFormComponent implements OnInit{

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ClientesService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    const cliente: Cliente = this.route.snapshot.data['cliente'];
    console.log(cliente)
    this.form = this.formBuilder.group({
      id: [cliente.id],
      nome: [cliente.nome, [Validators.required, Validators.minLength(4), Validators.maxLength(35)]],
      endereco: [cliente.endereco],
      telefone: [cliente.telefone]
    })
  }


  onSubmit() {
    console.log(this.form.value)
    this.service.save(this.form.value)
      .subscribe(result => this.onSuccess(), error=> this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this._snackBar.open('Cliente cadastrado com sucesso', '', {
      duration: 5000,
    });
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro ao salvar curso', '', { duration: 5000 });
  }
}
