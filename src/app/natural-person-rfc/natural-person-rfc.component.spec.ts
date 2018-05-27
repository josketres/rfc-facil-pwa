import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalPersonRfcComponent } from './natural-person-rfc.component';

describe('NaturalPersonRfcComponent', () => {
  let component: NaturalPersonRfcComponent;
  let fixture: ComponentFixture<NaturalPersonRfcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalPersonRfcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalPersonRfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
