import { TestBed } from '@angular/core/testing';

import { AssigndataService } from './assigndata.service';

describe('AssigndataService', () => {
  let service: AssigndataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssigndataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
