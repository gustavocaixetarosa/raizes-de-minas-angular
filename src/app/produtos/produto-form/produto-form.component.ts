import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbar } from '@angular/material/toolbar';

import { ProdutosService } from '../services/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../model/produto';
import { Location } from '@angular/common';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [
    MatCard,
    MatToolbar,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatCardActions,
    MatButton,
  ],
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.scss'
})
export class ProdutoFormComponent implements OnInit{

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ProdutosService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const produto: Produto = this.route.snapshot.data['produto'];
    console.log(produto);
    this.form = this.formBuilder.group({
      id: [produto.id],
      nome: [produto.nome, [Validators.required, Validators.minLength(6)]],
      peso: [produto.peso],
      quantidade: [produto.quantidade],
      descricao: [produto.descricao]
    })
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this._snackBar.open('Produto cadastrado com sucesso', '', {
      duration: 3000,
    });
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro ao salvar produto', '', { duration: 3000 });
  }

}
