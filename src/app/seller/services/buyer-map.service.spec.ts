import { TestBed } from '@angular/core/testing';

import { BuyerMapService } from './buyer-map.service';

describe('BuyerMapService', () => {
  let service: BuyerMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyerMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
