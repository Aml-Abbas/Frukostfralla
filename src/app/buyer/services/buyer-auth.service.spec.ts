import { TestBed } from '@angular/core/testing';

import { BuyerAuthService } from './buyer-auth.service';

describe('AuthService', () => {
  let service: BuyerAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyerAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
