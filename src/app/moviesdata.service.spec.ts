import { TestBed } from '@angular/core/testing';

import { MoviesDataService } from './moviesdata.service';

describe('MoviesdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesDataService = TestBed.get(MoviesDataService);
    expect(service).toBeTruthy();
  });
});
