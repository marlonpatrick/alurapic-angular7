import { TestBed } from '@angular/core/testing';

import { LocalStorageTokenService } from './local-storage-token.service';

describe('TokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalStorageTokenService = TestBed.get(LocalStorageTokenService);
    expect(service).toBeTruthy();
  });
});
