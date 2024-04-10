import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DiagramEditorService } from '../services/diagram-editor.service';

// const mxAux = require('mxgraph');
// const { mxGraph, mxGraphModel, mxHierarchicalLayout } = mxAux;

@Component({
  selector: 'app-contenido-tutorial',
  templateUrl: './contenido-tutorial.component.html',
  styleUrl: './contenido-tutorial.component.scss'
})
export class ContenidoTutorialComponent{
  @Input() dispositivo!:string;
  @Input() extendido!:boolean;

  @ViewChild('diagrama', { static: true }) diagramaRef: ElementRef;

  constructor(private diagram : DiagramEditorService){}

  editarDiagrama(){
    const diagramaElemento: HTMLImageElement | HTMLObjectElement = this.diagramaRef.nativeElement;
    this.diagram.editElement(diagramaElemento);
  }
}
