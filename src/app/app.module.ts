//Modulos
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
//Componentes
import { AppComponent } from './app.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresarGastoComponent } from './components/gastos/ingresar-gasto/ingresar-gasto.component';
import { ListarGastoComponent } from './components/gastos/listar-gasto/listar-gasto.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    IngresarGastoComponent,
    ListarGastoComponent,
    PresupuestoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
