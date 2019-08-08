import { TestBed } from '@angular/core/testing';

import { JSONProviderService } from './jsonprovider.service';

describe('JSONProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JSONProviderService = TestBed.get(JSONProviderService);
    expect(service).toBeTruthy();
  });
});
