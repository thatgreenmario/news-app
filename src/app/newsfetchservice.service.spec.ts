import { TestBed } from '@angular/core/testing';

import { NewsfetchserviceService } from './newsfetchservice.service';

describe('NewsfetchserviceService', () => {
  let service: NewsfetchserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsfetchserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
