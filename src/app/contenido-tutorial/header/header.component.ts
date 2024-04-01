import { Component, Input } from '@angular/core';
import { OcultarTablaService } from '../../services/ocultar-tabla.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
@Input() dispositivo!:string;
@Input() extendido!:boolean;

constructor(public ocultarTablaService: OcultarTablaService){}
expandirTabla(){
  this.ocultarTablaService.setValorOcultar(false);
}
}
