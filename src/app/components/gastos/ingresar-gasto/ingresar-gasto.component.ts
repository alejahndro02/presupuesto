import { PresupuestoService } from './../../../services/presupuesto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {
  nombreGasto: string;
  cantidad:number
  formularioIncorrecto:boolean;
  textoError:string;

  constructor(private _presupuestoService: PresupuestoService) {
    this.nombreGasto= '';
    this.cantidad=0;
    this.formularioIncorrecto= false;
    this.textoError='Nombre Gasto o Cantidad Incorrecta';
  }

  ngOnInit(): void {
  }
  agergarGasto(){
    if(this.cantidad > this._presupuestoService.restante){
    this.formularioIncorrecto= true;
    this.textoError='La cantidad es mayor al presupuesto';
    return;
    }
    if(this.nombreGasto === '' || this.cantidad <= 0){
      this.formularioIncorrecto = true;
    } else {
      //Se declara un objeto
      const GASTO={
        nombre:this.nombreGasto,
        cantidad:this.cantidad
      }

      //se envia el objeto atraves del subject
      this._presupuestoService.agregarGasto(GASTO)

      //Reset form 
      this.formularioIncorrecto = false;
      this.nombreGasto= '';
      this.cantidad=0;

    }
  }
}
