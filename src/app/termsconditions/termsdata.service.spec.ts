import { TestBed } from '@angular/core/testing';

import { TermsdataService } from './termsdata.service';

describe('TermsdataService', () => {
  let service: TermsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TermsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
