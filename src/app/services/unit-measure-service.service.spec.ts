import { TestBed } from '@angular/core/testing';

import { UnitMeasureService } from './unit-measure-service.service';

describe('UnitMeasureServiceService', () => {
  let service: UnitMeasureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitMeasureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
