import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OcultarTablaService {

  public ocultarTablaChange: Subject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public getValorOcultar(){
    return this.ocultarTablaChange.asObservable();
  }

  public setValorOcultar(valorOcultar : boolean ){
    this.ocultarTablaChange.next(valorOcultar);
  }
}
