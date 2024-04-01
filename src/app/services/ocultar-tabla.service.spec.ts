import { TestBed } from '@angular/core/testing';

import { OcultarTablaService } from './ocultar-tabla.service';

describe('OcultarTablaService', () => {
  let service: OcultarTablaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OcultarTablaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
