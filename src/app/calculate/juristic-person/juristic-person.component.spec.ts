import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuristicPersonComponent } from './juristic-person.component';

describe('JuristicPersonComponent', () => {
  let component: JuristicPersonComponent;
  let fixture: ComponentFixture<JuristicPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuristicPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuristicPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
