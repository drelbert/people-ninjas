import { TestBed } from '@angular/core/testing';

import { NinjaDataService } from './ninja-data.service';

describe('NinjaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NinjaDataService = TestBed.get(NinjaDataService);
    expect(service).toBeTruthy();
  });
});
