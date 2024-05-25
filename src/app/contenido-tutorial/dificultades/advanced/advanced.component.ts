import { ChangeDetectorRef, Component, ElementRef, PLATFORM_ID, Inject, ViewChild } from '@angular/core';
import { DiagramEditorService } from '../../../services/diagram-editor.service';
import { ResponsiveService } from '../../../services/responsive.service';
import { DISPOSITIVOS } from '../../../constantes/constantes-responsive';
import { Subscription } from 'rxjs';
import { ScrollToService } from '../../../services/scroll-to.service';
import { Message } from 'primeng/api';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrl: './advanced.component.scss'
})
export class AdvancedComponent {
  @ViewChild('diagrama1', { static: true }) diagramaRef1: ElementRef;
  @ViewChild('diagrama2', { static: true }) diagramaRef2: ElementRef;
  @ViewChild('diagrama3', { static: true }) diagramaRef3: ElementRef;

  mostrarMensaje = false;

  message: Message[];

  isFlipped = [ 
    { id : 0, valor: false },
    { id : 1, valor: false },
    { id : 2, valor: false },
    { id : 3, valor: false }
  ]
  
  dispositivo: string = DISPOSITIVOS.COMPUTER;

  responsiveChanges?: Subscription;

  apartadoChanges?: Subscription;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private diagram : DiagramEditorService, private responsiveService: ResponsiveService, 
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

  editarDiagrama(id: number){
    if(this.dispositivo != 'computer') this.mostrarMensaje = true;
    else{
      switch(id){
        case 1:
          const diagramaElemento1: HTMLImageElement | HTMLObjectElement = this.diagramaRef1.nativeElement;
          this.diagram.editElement(diagramaElemento1);
          break;
        case 2:
          const diagramaElemento2: HTMLImageElement | HTMLObjectElement = this.diagramaRef2.nativeElement;
          this.diagram.editElement(diagramaElemento2);
          console.log("entro");
          break;
        
        default:
          const diagramaElemento3: HTMLImageElement | HTMLObjectElement = this.diagramaRef3.nativeElement;
          this.diagram.editElement(diagramaElemento3);
          break;
      }
    }
  }
  
  toggleFlip(posicion: number): void {
    this.isFlipped[posicion].valor = !this.isFlipped[posicion].valor;
  }

  scrollToSelector(apartado : string){
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const specificationElement = this.elementRef.nativeElement.querySelector('#' + apartado);
        if (specificationElement) {
          specificationElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    }
  }
  
}
