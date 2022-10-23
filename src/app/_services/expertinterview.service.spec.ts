import { TestBed } from '@angular/core/testing';

import { ExpertinterviewService } from './expertinterview.service';

describe('ExpertinterviewService', () => {
  let service: ExpertinterviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpertinterviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
