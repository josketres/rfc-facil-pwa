import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalPersonComponent } from './natural-person.component';

describe('NaturalPersonRfcComponent', () => {
  let component: NaturalPersonComponent;
  let fixture: ComponentFixture<NaturalPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
