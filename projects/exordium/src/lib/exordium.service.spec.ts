import { TestBed } from '@angular/core/testing';

import { ExordiumService } from './exordium.service';

describe('ExordiumService', () => {
  let service: ExordiumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExordiumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
