import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesListComponent } from './components/clientes-list/clientes-list.component';
import { ClienteFormComponent } from './containers/cliente-form/cliente-form.component';
import { ClientesComponent } from './containers/clientes/clientes.component';
import { ClientesService } from './services/clientes.service';



@NgModule({
    imports: [
        CommonModule,
        ClientesRoutingModule,
        AppMaterialModule,
        SharedModule,
        ReactiveFormsModule,
        ClientesComponent,
        ClienteFormComponent,
        ClientesListComponent
    ],
    providers: [ClientesService]
})
export class ClientesModule { }
