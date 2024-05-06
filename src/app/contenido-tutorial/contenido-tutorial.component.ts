import { Component, Input, Output, EventEmitter } from '@angular/core';
import Aos from 'aos';
import { ChangeDifficultyService } from '../services/change-difficulty.service';

@Component({
  selector: 'app-contenido-tutorial',
  templateUrl: './contenido-tutorial.component.html',
  styleUrl: './contenido-tutorial.component.scss'
})
export class ContenidoTutorialComponent{
  @Input() dispositivo!:string;
  @Input() extendido!:boolean;
  @Input() apartado!:string;
  
  constructor(private changeDiff: ChangeDifficultyService){}

  ngOnInit(){
    Aos.init();
    window.addEventListener('load', Aos.refresh);
  }
  
  onDifficultySelected(difficulty: string) {
    this.changeDiff.setDificultad(difficulty);
  }
}
