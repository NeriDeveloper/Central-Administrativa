import { TestBed, inject } from '@angular/core/testing';

import { LinksUteisService } from './links-uteis.service';

describe('LinksUteisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinksUteisService]
    });
  });

  it('should ...', inject([LinksUteisService], (service: LinksUteisService) => {
    expect(service).toBeTruthy();
  }));
});
