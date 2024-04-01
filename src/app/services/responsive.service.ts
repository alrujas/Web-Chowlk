import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { DISPOSITIVOS } from '../constantes/constantes-responsive';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  public responsiveChange: Subject<string> = new BehaviorSubject<string>(
    DISPOSITIVOS.COMPUTER
  );

  public getDispositivoActual(){
    return this.responsiveChange.asObservable();
  }

  public setDispositivoActual(dispositivoActual : string ){
    this.responsiveChange.next(dispositivoActual);
  }
}
