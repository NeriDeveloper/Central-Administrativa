import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaDetailComponent } from './loja-detail.component';

describe('LojaDetailComponent', () => {
  let component: LojaDetailComponent;
  let fixture: ComponentFixture<LojaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LojaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
