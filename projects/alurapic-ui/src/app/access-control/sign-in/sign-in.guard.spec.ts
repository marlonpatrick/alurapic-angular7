import { TestBed, async, inject } from '@angular/core/testing';

import { SignInGuard } from './sign-in.guard';

describe('LoggedInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignInGuard]
    });
  });

  it('should ...', inject([SignInGuard], (guard: SignInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
