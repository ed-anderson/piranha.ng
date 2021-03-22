import { TestBed } from '@angular/core/testing';

import { RoutesProviderService } from './routes-provider.service';

describe('RoutesProviderService', () => {
  let service: RoutesProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutesProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
