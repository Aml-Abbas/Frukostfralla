import { TestBed } from '@angular/core/testing';

import { ChooseBakeryService } from './choose-bakery.service';

describe('ChooseBakeryServiceService', () => {
  let service: ChooseBakeryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseBakeryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
