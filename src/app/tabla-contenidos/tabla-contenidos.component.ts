import { Component, EventEmitter, Input, Output} from '@angular/core';
import { OcultarTablaService } from '../services/ocultar-tabla.service';


@Component({
  selector: 'app-tabla-contenidos',
  templateUrl: './tabla-contenidos.component.html',
  styleUrl: './tabla-contenidos.component.scss'
})
export class TablaContenidosComponent {
  @Input() dispositivo!:string;

  constructor(public ocultarTablaService : OcultarTablaService){}

  contraerTabla(){
    this.ocultarTablaService.setValorOcultar(true);
  }
}
