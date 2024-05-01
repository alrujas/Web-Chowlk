import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorDificultadComponent } from './selector-dificultad.component';

describe('SelectorDificultadComponent', () => {
  let component: SelectorDificultadComponent;
  let fixture: ComponentFixture<SelectorDificultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectorDificultadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectorDificultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
