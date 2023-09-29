import { TestBed } from '@angular/core/testing';

import { UnitMeasureServiceService } from './unit-measure-service.service';

describe('UnitMeasureServiceService', () => {
  let service: UnitMeasureServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitMeasureServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
