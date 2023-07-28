import { TestBed } from '@angular/core/testing';

import { MobNumberGuard } from './mob-number.guard';

describe('MobNumberGuard', () => {
  let guard: MobNumberGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MobNumberGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
