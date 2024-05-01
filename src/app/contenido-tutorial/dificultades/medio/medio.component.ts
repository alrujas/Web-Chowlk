import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DiagramEditorService } from '../../../services/diagram-editor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponsiveService } from '../../../services/responsive.service';
import { DISPOSITIVOS } from '../../../constantes/constantes-responsive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-medio',
  templateUrl: './medio.component.html',
  styleUrl: './medio.component.scss'
})
export class MedioComponent {
  mostrarSolucion : {[key:number] : boolean } = {
    1: false,
    2: false,
    3: false,
    4: false
  }

  @ViewChild('diagrama', { static: true }) diagramaRef: ElementRef;
  
  dispositivo: string = DISPOSITIVOS.COMPUTER;

  responsiveChanges?: Subscription;

  constructor(private diagram : DiagramEditorService, private responsiveService: ResponsiveService, private changeDetector : ChangeDetectorRef){}

  ngOnInit(){
    this.responsiveChanges = this.responsiveService.getDispositivoActual()
    .subscribe(dispositivoActual => {
      this.dispositivo = dispositivoActual;
      this.changeDetector.detectChanges();
  });
  }

  editarDiagrama(){
    const diagramaElemento: HTMLImageElement | HTMLObjectElement = this.diagramaRef.nativeElement;
    this.diagram.editElement(diagramaElemento);
  }
  
  solucion(posicion : number){
    this.mostrarSolucion[posicion] = !this.mostrarSolucion[posicion];
  }
}
