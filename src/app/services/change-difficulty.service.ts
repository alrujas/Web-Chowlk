import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeDifficultyService {
  public difficultyChange: Subject<string> = new BehaviorSubject<string>(""
  );

  public getDificultad(){
    return this.difficultyChange.asObservable();
  }

  public setDificultad(dificultad : string ){
    this.difficultyChange.next(dificultad);
  }
}
