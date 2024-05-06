import { TestBed } from '@angular/core/testing';

import { ChangeDifficultyService } from './change-difficulty.service';

describe('ChangeDifficultyService', () => {
  let service: ChangeDifficultyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeDifficultyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
