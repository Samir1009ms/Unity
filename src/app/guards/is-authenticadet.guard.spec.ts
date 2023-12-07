import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isAuthenticadetGuard } from './is-authenticadet.guard';

describe('isAuthenticadetGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isAuthenticadetGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
