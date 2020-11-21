import { TestBed } from '@angular/core/testing';

import { BuyerStartService } from './buyer-start.service';

describe('BuyerStartService', () => {
  let service: BuyerStartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyerStartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
