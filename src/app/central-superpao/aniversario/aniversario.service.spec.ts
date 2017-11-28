import { TestBed, inject } from '@angular/core/testing';

import { AniversarioService } from './aniversario.service';

describe('AniversarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AniversarioService]
    });
  });

  it('should ...', inject([AniversarioService], (service: AniversarioService) => {
    expect(service).toBeTruthy();
  }));
});
