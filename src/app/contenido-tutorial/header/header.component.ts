import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { OcultarTablaService } from '../../services/ocultar-tabla.service';
import { ChangeDifficultyService } from '../../services/change-difficulty.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
@Input() dispositivo!:string;
@Input() extendido!:boolean;

diffChanges?: Subscription;

diff = "";

constructor(public ocultarTablaService: OcultarTablaService, public changeDiff: ChangeDifficultyService,
  private changeDetector : ChangeDetectorRef
){}

expandirTabla(){
  this.ocultarTablaService.setValorOcultar(false);
}

ngOnInit(){
  this.diffChanges = this.changeDiff.getDificultad()
  .subscribe(diffActual => {
    this.diff = diffActual;
    this.changeDetector.detectChanges();
  });
}

}
