import { TestBed, inject } from '@angular/core/testing';

import { TreinamentosService } from './treinamentos.service';

describe('TreinamentosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreinamentosService]
    });
  });

  it('should ...', inject([TreinamentosService], (service: TreinamentosService) => {
    expect(service).toBeTruthy();
  }));
});
