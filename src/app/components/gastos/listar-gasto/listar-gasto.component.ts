import { PresupuestoService } from './../../../services/presupuesto.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit, OnDestroy {
  subscription : Subscription;
  presupuesto:  number;
  restante: number;
  gastList: any[] = [];

  constructor(private _presupuestoService: PresupuestoService) {
    this.presupuesto = 0 ;
    this.restante = 0;
    this.subscription = this._presupuestoService.getGasto().subscribe(data => {
      this.restante = this.restante - data.cantidad;
      this.gastList.push(data);
    });
  }

  ngOnInit(): void {
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;

  }
  ngOnDestroy():void{
    {
      this.subscription.unsubscribe();
    }
  }
}
