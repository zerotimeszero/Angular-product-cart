import { TestBed } from '@angular/core/testing';

import { UnitMeasurmentService } from './unit-measurment.service';

describe('UnitMeasurmentService', () => {
  let service: UnitMeasurmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitMeasurmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
