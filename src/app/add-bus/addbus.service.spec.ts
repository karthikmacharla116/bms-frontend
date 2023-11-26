import { TestBed } from '@angular/core/testing';

import { AddbusService } from './addbus.service';

describe('AddbusService', () => {
  let service: AddbusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddbusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
