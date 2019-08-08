import { TestBed } from '@angular/core/testing';

import { JSONRequestService } from './jsonrequest.service';

describe('JSONRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JSONRequestService = TestBed.get(JSONRequestService);
    expect(service).toBeTruthy();
  });
});
