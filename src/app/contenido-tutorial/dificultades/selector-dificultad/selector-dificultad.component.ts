import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDifficultyService } from '../../../services/change-difficulty.service';

@Component({
  selector: 'app-selector-dificultad',
  templateUrl: './selector-dificultad.component.html',
  styleUrl: './selector-dificultad.component.scss'
})
export class SelectorDificultadComponent {
  @Output() difficultySelected = new EventEmitter<string>();
  @Input() dispositivo !: string;

  constructor(private router: Router, private changeDiff: ChangeDifficultyService){}

  selectDifficulty(difficulty: string) {
    this.changeDiff.setDificultad(difficulty);
    this.router.navigate([difficulty]);
  }
}
