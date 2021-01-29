import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerficacionGuardComponent } from './verficacion-guard.component';

describe('VerficacionGuardComponent', () => {
  let component: VerficacionGuardComponent;
  let fixture: ComponentFixture<VerficacionGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerficacionGuardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerficacionGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
