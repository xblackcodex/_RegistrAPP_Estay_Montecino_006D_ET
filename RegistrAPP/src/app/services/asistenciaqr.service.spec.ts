import { TestBed } from '@angular/core/testing';

import { AsistenciaqrService } from './asistenciaqr.service';

describe('AsistenciaqrService', () => {
  let service: AsistenciaqrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsistenciaqrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
