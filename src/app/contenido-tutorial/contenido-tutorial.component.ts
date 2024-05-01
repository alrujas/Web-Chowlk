import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-contenido-tutorial',
  templateUrl: './contenido-tutorial.component.html',
  styleUrl: './contenido-tutorial.component.scss'
})
export class ContenidoTutorialComponent{
  @Input() dispositivo!:string;
  @Input() extendido!:boolean;
  @Input() apartado!:string;
  @Output() apartadoChange = new EventEmitter<string>()

  onDifficultySelected(difficulty: string) {
    this.apartado = difficulty;
    this.apartadoChange.emit(this.apartado);
  }
}
