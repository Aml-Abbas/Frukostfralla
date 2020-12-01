import { TestBed } from '@angular/core/testing';

import { BuyerSignupService } from './buyer-signup.service';

describe('BuyerSigupService', () => {
  let service: BuyerSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyerSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
