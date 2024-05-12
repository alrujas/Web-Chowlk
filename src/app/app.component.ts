import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ResponsiveService } from './services/responsive.service';
import { DISPOSITIVOS } from './constantes/constantes-responsive';
import { Subscription } from 'rxjs';
import { OcultarTablaService } from './services/ocultar-tabla.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Tutoriales';
  ocultar : boolean = false;

  ocultarChanges?: Subscription;
  //responsive
  responsiveChanges?: Subscription;
  dispositivo: string = DISPOSITIVOS.COMPUTER;

  constructor(
    public responsiveService : ResponsiveService,
    public ocultarTablaService : OcultarTablaService,
    private bpObserver: BreakpointObserver,
    private changeDetector : ChangeDetectorRef
  ){}

  ngOnInit(){
    this.bpObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.TabletPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletLandscape
    ]).subscribe(resultado => {
      const bp = resultado.breakpoints;

      if(bp[Breakpoints.HandsetPortrait]){
        this.responsiveService.setDispositivoActual(DISPOSITIVOS.MOBILE);
      } else if (bp[Breakpoints.TabletPortrait]){
        this.responsiveService.setDispositivoActual(DISPOSITIVOS.TABLET);
        this.ocultar=true;
      } else if (bp[Breakpoints.HandsetLandscape]){
        this.responsiveService.setDispositivoActual(DISPOSITIVOS.MOBILE_LANDSCAPE);
        this.ocultar=true;
      }else if(bp[Breakpoints.TabletLandscape]){
        this.responsiveService.setDispositivoActual(DISPOSITIVOS.TABLET_LANDSCAPE);
        this.ocultar=true;
      } else {
        this.responsiveService.setDispositivoActual(DISPOSITIVOS.COMPUTER);
        this.ocultar=true;
      }
    });
    this.responsiveChanges = this.responsiveService.getDispositivoActual()
      .subscribe(dispositivoActual => {
        this.dispositivo = dispositivoActual;
        this.changeDetector.detectChanges();
    });
    this.ocultarChanges = this.ocultarTablaService.getValorOcultar()
      .subscribe(ocultarActual => {
        this.ocultar = ocultarActual;
        this.changeDetector.detectChanges();
      })
  }
}
