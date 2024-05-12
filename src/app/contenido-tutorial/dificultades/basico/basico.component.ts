import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { DiagramEditorService } from '../../../services/diagram-editor.service';
import { ResponsiveService } from '../../../services/responsive.service';
import { Subscription } from 'rxjs';
import { DISPOSITIVOS } from '../../../constantes/constantes-responsive';
import { ScrollToService } from '../../../services/scroll-to.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styleUrl: './basico.component.scss'
})
export class BasicoComponent {

  dispositivo: string = DISPOSITIVOS.COMPUTER;

  message: Message[];

  responsiveChanges?: Subscription;

  apartadoChanges?: Subscription;

  @ViewChild('diagrama', { static: true }) diagramaRef: ElementRef;

  isFlipped = [ 
    { id : 0, valor: false },
    { id : 1, valor: false },
    { id : 2, valor: false }
  ]
  
  constructor(private diagram : DiagramEditorService, private responsiveService: ResponsiveService, 
    private changeDetector : ChangeDetectorRef, private scrollTo : ScrollToService, private elementRef : ElementRef){}

  ngOnInit(){
    this.responsiveChanges = this.responsiveService.getDispositivoActual()
    .subscribe(dispositivoActual => {
      this.dispositivo = dispositivoActual;
      this.changeDetector.detectChanges();
  });
    this.apartadoChanges = this.scrollTo.getApartado().subscribe(apartado => {
      this.scrollToSelector(apartado);
      this.changeDetector.detectChanges;
    });
    this.message = [
      { severity: 'warn', detail: 'To perform the tutorial exercises, please access from a computer' }
    ]
  }

  editarDiagrama(){
    const diagramaElemento: HTMLImageElement | HTMLObjectElement = this.diagramaRef.nativeElement;
    this.diagram.editElement(diagramaElemento);
  }

  toggleFlip(posicion: number): void {
    this.isFlipped[posicion].valor = !this.isFlipped[posicion].valor;
  }

  scrollToSelector(apartado : string){
    const specificationElement = this.elementRef.nativeElement.querySelector('#' + apartado);
    if (specificationElement) {
      specificationElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
