import { TestBed } from '@angular/core/testing';

import { FiltereventService } from './filterevent.service';

describe('FiltereventService', () => {
  let service: FiltereventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltereventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
