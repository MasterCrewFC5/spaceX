import { TestBed, inject } from '@angular/core/testing';

import { DetailedCapsuleService } from './detailed-capsule.service';

describe('DetailedCapsuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailedCapsuleService]
    });
  });

  it('should be created', inject([DetailedCapsuleService], (service: DetailedCapsuleService) => {
    expect(service).toBeTruthy();
  }));
});
