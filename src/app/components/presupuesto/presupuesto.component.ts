import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PresupuestoService } from './../../services/presupuesto.service';
@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {
  cantidad: number;
  cantidadIncorrecta : boolean;

  //mandamos a llamar el servicio atraves del contructor
  constructor(private _presupuestoService: PresupuestoService, private router : Router) { 
    this.cantidad = 0;
    this.cantidadIncorrecta = false;
  }

  ngOnInit(): void {
  }
  agregar(){
    if( this.cantidad > 0 ) {
     this.cantidadIncorrecta = false; 
     this._presupuestoService.presupuesto = this.cantidad;
     this._presupuestoService.restante = this.cantidad;
     //Redirecciona al componente gastos
     this.router.navigate(['/gastos'])

    }else{
     this.cantidadIncorrecta = true;
    }
  }
}
