import { TestBed } from '@angular/core/testing';

import { FaqdataService } from './faqdata.service';

describe('FaqdataService', () => {
  let service: FaqdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
