import { TestBed } from '@angular/core/testing';

import { TranslocoService } from './transloco.http-loader';

describe('TranslocoService', () => {
  let service: TranslocoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslocoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
