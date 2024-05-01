import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DiagramEditorService } from '../../../services/diagram-editor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DISPOSITIVOS } from '../../../constantes/constantes-responsive';
import { Subscription } from 'rxjs';
import { ResponsiveService } from '../../../services/responsive.service';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrl: './advanced.component.scss'
})
export class AdvancedComponent {
  
  mostrarSolucion = false;
  
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
  
  solucion(){
    this.mostrarSolucion = !this.mostrarSolucion;
  }
}
