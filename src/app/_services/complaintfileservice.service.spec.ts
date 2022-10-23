import { TestBed } from '@angular/core/testing';

import { ComplaintfileserviceService } from './complaintfileservice.service';

describe('ComplaintfileserviceService', () => {
  let service: ComplaintfileserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintfileserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
