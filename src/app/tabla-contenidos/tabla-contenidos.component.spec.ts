import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaContenidosComponent } from './tabla-contenidos.component';

describe('TablaContenidosComponent', () => {
  let component: TablaContenidosComponent;
  let fixture: ComponentFixture<TablaContenidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaContenidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaContenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
