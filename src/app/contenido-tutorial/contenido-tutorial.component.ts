import { Component, Input, PLATFORM_ID, Inject , ChangeDetectorRef } from '@angular/core';
import Aos from 'aos';
import { ChangeDifficultyService } from '../services/change-difficulty.service';
import { Message } from 'primeng/api';
import { Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

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
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private changeDiff: ChangeDifficultyService, 
              private changeDetector: ChangeDetectorRef, private router: Router){}

  ngOnInit(){
    if (isPlatformBrowser(this.platformId)) {
      Aos.init();
      window.addEventListener('load', Aos.refresh);
    }
    this.router.navigate(["Basic"]);
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
