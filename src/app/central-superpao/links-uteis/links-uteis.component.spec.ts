import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksUteisComponent } from './links-uteis.component';

describe('LinksUteisComponent', () => {
  let component: LinksUteisComponent;
  let fixture: ComponentFixture<LinksUteisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksUteisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksUteisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
