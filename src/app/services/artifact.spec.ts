import { TestBed } from '@angular/core/testing';

import { Artifact } from './artifact';

describe('Artifact', () => {
  let service: Artifact;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Artifact);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
