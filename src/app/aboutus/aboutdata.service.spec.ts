import { TestBed } from '@angular/core/testing';

import { AboutdataService } from './aboutdata.service';

describe('AboutdataService', () => {
  let service: AboutdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
