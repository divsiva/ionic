import { TestBed } from '@angular/core/testing';

import { ResDetailsService } from './res-details.service';

describe('ResDetailsService', () => {
  let service: ResDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
