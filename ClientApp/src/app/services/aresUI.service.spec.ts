import { TestBed } from '@angular/core/testing';

import { aresUIService } from './aresUI.service';

describe('aresUIService', () => {
  let service: aresUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(aresUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
