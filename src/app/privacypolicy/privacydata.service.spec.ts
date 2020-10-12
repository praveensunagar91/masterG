import { TestBed } from '@angular/core/testing';

import { PrivacydataService } from './privacydata.service';

describe('PrivacydataService', () => {
  let service: PrivacydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivacydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
