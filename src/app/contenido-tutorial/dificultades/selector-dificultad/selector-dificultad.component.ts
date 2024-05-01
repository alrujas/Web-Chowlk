import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector-dificultad',
  templateUrl: './selector-dificultad.component.html',
  styleUrl: './selector-dificultad.component.scss'
})
export class SelectorDificultadComponent {
  @Output() difficultySelected = new EventEmitter<string>();
  @Input() dispositivo !: string;

  constructor(private router: Router){}

  selectDifficulty(difficulty: string) {
    this.router.navigate([difficulty]);
    this.difficultySelected.emit(difficulty);
  }
}
