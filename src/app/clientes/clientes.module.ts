import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';



import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesListComponent } from './components/clientes-list/clientes-list.component';
import { ClienteFormComponent } from './containers/cliente-form/cliente-form.component';
import { ClientesComponent } from './containers/clientes/clientes.component';
import { ClientesService } from './services/clientes.service';



@NgModule({
    imports: [
    CommonModule,
    ClientesRoutingModule,
    ReactiveFormsModule,
    ClientesComponent,
    ClienteFormComponent,
    ClientesListComponent
],
    providers: [ClientesService]
})
export class ClientesModule { }
