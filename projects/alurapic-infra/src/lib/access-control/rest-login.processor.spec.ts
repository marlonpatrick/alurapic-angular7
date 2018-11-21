import { TestBed } from '@angular/core/testing';

import { RestLoginProcessor } from './rest-login.processor';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestLoginProcessor = TestBed.get(RestLoginProcessor);
    expect(service).toBeTruthy();
  });
});
