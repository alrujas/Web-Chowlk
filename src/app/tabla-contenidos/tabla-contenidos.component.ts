import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { OcultarTablaService } from '../services/ocultar-tabla.service';
import { ScrollToService } from '../services/scroll-to.service';
import { ChangeDifficultyService } from '../services/change-difficulty.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tabla-contenidos',
  templateUrl: './tabla-contenidos.component.html',
  styleUrl: './tabla-contenidos.component.scss'
})
export class TablaContenidosComponent {
  @Input() dispositivo!:string;

  diffChanges?: Subscription;

  diff = "";
  diffTabla = "";

  constructor(public ocultarTablaService : OcultarTablaService, private scrollTo : ScrollToService, 
    private changeDetector : ChangeDetectorRef, public changeDiff: ChangeDifficultyService){}

  ngOnInit(){
    this.diffChanges = this.changeDiff.getDificultad()
    .subscribe(diffActual => {
      this.diff = diffActual;
      this.diffTabla = diffActual;
      this.changeDetector.detectChanges();
    });
  }

  contraerTabla(){
    this.ocultarTablaService.setValorOcultar(true);
  }

  contraerDificultad(){
    this.diffTabla = "";
  }
  
  expandirDificultad(dificultad: string){
    this.diffTabla = dificultad;
  }
  
  scrollToSelector(apartado : string): void {
    this.changeDiff.setDificultad(this.diffTabla);
    this.scrollTo.setApartado(apartado);
  }
}
