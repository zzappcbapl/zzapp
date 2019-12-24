import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontrolkiComponent } from './kontrolki.component';

describe('KontrolkiComponent', () => {
  let component: KontrolkiComponent;
  let fixture: ComponentFixture<KontrolkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontrolkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontrolkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
