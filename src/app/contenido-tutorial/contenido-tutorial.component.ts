import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import Aos from 'aos';
import { ChangeDifficultyService } from '../services/change-difficulty.service';
import { Message } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contenido-tutorial',
  templateUrl: './contenido-tutorial.component.html',
  styleUrl: './contenido-tutorial.component.scss'
})
export class ContenidoTutorialComponent{
  @Input() dispositivo!:string;
  @Input() extendido!:boolean;
  @Input() apartado!:string;

  diffChanges?: Subscription;

  diff = "";
  
  message: Message[];
  constructor(private changeDiff: ChangeDifficultyService, private changeDetector: ChangeDetectorRef){}

  ngOnInit(){
    Aos.init();
    window.addEventListener('load', Aos.refresh);
    this.message = [
      { severity: 'info', detail: 'Choose a difficulty to continue with the tutorial.' }
    ],
    this.diffChanges = this.changeDiff.getDificultad()
    .subscribe(diffActual => {
      this.diff = diffActual;
      this.changeDetector.detectChanges();
    });
  }
}
