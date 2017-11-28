import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimentoDetailComponent } from './procedimento-detail.component';

describe('ProcedimentoDetailComponent', () => {
  let component: ProcedimentoDetailComponent;
  let fixture: ComponentFixture<ProcedimentoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedimentoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimentoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
