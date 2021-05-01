import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {
  cantidad: number;
  cantidadIncorrecta : boolean;

  constructor() { 
    this.cantidad = 0;
    this.cantidadIncorrecta = false;
  }

  ngOnInit(): void {
  }
  agregar(){
    if( this.cantidad > 0 ) {
     this.cantidadIncorrecta = false; 
    }else{
     this.cantidadIncorrecta = true;
    }
  }
}
