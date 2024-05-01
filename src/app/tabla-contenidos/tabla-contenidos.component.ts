import { Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { OcultarTablaService } from '../services/ocultar-tabla.service';
import { ScrollToService } from '../services/scroll-to.service';


@Component({
  selector: 'app-tabla-contenidos',
  templateUrl: './tabla-contenidos.component.html',
  styleUrl: './tabla-contenidos.component.scss'
})
export class TablaContenidosComponent {
  @Input() dispositivo!:string;
  @Input() apartado!:string;

  
  constructor(public ocultarTablaService : OcultarTablaService, private scrollTo : ScrollToService){}

  contraerTabla(){
    this.ocultarTablaService.setValorOcultar(true);
  }
  contraerDificultad(){
    this.apartado = '';
  }
  expandirDificultad(dificultad: string){
    this.apartado = dificultad;
  }
  scrollToSelector(apartado : string): void {
    this.scrollTo.setApartado(apartado);
  }
}
