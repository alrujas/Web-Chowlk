import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DiagramEditorService } from '../../../services/diagram-editor.service';
import { ResponsiveService } from '../../../services/responsive.service';
import { Subscription } from 'rxjs';
import { DISPOSITIVOS } from '../../../constantes/constantes-responsive';
import { ScrollToService } from '../../../services/scroll-to.service';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styleUrl: './basico.component.scss'
})
export class BasicoComponent {

  dispositivo: string = DISPOSITIVOS.COMPUTER;

  responsiveChanges?: Subscription;

  apartadoChanges?: Subscription;

  mostrarSolucion : {[key:number] : boolean } = {
    1: false,
    2: false,
    3: false,
    4: false
  }
  @ViewChild('diagrama', { static: true }) diagramaRef: ElementRef;

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
    })
  }

  editarDiagrama(){
    const diagramaElemento: HTMLImageElement | HTMLObjectElement = this.diagramaRef.nativeElement;
    this.diagram.editElement(diagramaElemento);
  }
  
  solucion(posicion: number){
    this.mostrarSolucion[posicion]= !this.mostrarSolucion[posicion];
  }

  scrollToSelector(apartado : string){
    const specificationElement = this.elementRef.nativeElement.querySelector('#' + apartado);
    if (specificationElement) {
      specificationElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}