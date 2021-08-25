import { TestBed } from '@angular/core/testing';

import { NewmovieService } from './newmovie.service';

describe('NewmovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewmovieService = TestBed.get(NewmovieService);
    expect(service).toBeTruthy();
  });
});
