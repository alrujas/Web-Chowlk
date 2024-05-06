import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DiagramEditorService } from '../../../services/diagram-editor.service';
import { ResponsiveService } from '../../../services/responsive.service';
import { DISPOSITIVOS } from '../../../constantes/constantes-responsive';
import { Subscription } from 'rxjs';
import { ScrollToService } from '../../../services/scroll-to.service';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrl: './advanced.component.scss'
})
export class AdvancedComponent {
  @ViewChild('diagrama', { static: true }) diagramaRef: ElementRef;

  isFlipped = [ 
    { id : 0, valor: false },
    { id : 1, valor: false },
    { id : 2, valor: false },
    { id : 3, valor: false }
  ]
  
  dispositivo: string = DISPOSITIVOS.COMPUTER;

  responsiveChanges?: Subscription;

  apartadoChanges?: Subscription;

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
