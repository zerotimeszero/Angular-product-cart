import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitMeasurementsComponent } from './unit-measurements.component';

describe('UnitMeasurementsComponent', () => {
  let component: UnitMeasurementsComponent;
  let fixture: ComponentFixture<UnitMeasurementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitMeasurementsComponent]
    });
    fixture = TestBed.createComponent(UnitMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
