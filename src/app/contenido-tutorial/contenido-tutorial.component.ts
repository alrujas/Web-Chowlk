import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contenido-tutorial',
  templateUrl: './contenido-tutorial.component.html',
  styleUrl: './contenido-tutorial.component.scss'
})
export class ContenidoTutorialComponent {
  @Input() dispositivo!:string;
  @Input() extendido!:boolean;
}
