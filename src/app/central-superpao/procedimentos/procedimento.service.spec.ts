import { TestBed, inject } from '@angular/core/testing';

import { ProcedimentoService } from './procedimento.service';

describe('ProcedimentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcedimentoService]
    });
  });

  it('should ...', inject([ProcedimentoService], (service: ProcedimentoService) => {
    expect(service).toBeTruthy();
  }));
});
