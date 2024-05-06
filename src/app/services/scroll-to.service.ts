import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollToService {
  public scrollToChange: Subject<string> = new BehaviorSubject<string>("introduction"
  );

  public getApartado(){
    return this.scrollToChange.asObservable();
  }

  public setApartado(apartado : string ){
    this.scrollToChange.next(apartado);
  }
}
