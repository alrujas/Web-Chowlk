import { TestBed } from '@angular/core/testing';

import { DiagramEditorService } from './diagram-editor.service';

describe('DiagramEditorService', () => {
  let service: DiagramEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagramEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
