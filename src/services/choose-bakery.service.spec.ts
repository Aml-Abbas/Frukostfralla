import { TestBed } from '@angular/core/testing';

import { BakeriesService } from './bakeries.service';

describe('ChooseBakeryServiceService', () => {
  let service: BakeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BakeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
