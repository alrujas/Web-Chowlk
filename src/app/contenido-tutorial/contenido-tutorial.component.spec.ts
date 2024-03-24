import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoTutorialComponent } from './contenido-tutorial.component';

describe('ContenidoTutorialComponent', () => {
  let component: ContenidoTutorialComponent;
  let fixture: ComponentFixture<ContenidoTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContenidoTutorialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenidoTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
