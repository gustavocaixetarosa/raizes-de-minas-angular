import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.scss'
})
export class ClienteFormComponent{

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: ClientesService,
    private _snackBar: MatSnackBar,
    private location: Location) {
    this.form = this.formBuilder.group({
      nome: [null],
      endereco: [null],
      telefone: [null]
    });
   }

   onSubmit() {
      this.service.save(this.form.value).subscribe(result => console.log(result), error => this.onError());
      this.onCancel();
    };


   onCancel() {
    this.location.back();
   }

   private onSuccess() {
    this._snackBar.open('Cliente cadastrado com sucesso', '', { duration: 5000});
    this.onCancel();
  }

   private onError(){
    this._snackBar.open('Erro ao salvar curso', '', { duration: 5000});
   }
}

