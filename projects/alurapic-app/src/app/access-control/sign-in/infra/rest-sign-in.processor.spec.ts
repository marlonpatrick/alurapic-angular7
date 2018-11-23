import { TestBed } from '@angular/core/testing';

import { RestSignInProcessor } from './rest-sign-in.processor';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestSignInProcessor = TestBed.get(RestSignInProcessor);
    expect(service).toBeTruthy();
  });
});
