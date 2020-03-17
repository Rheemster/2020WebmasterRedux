import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Car2Component } from './car2.component';

describe('Car2Component', () => {
  let component: Car2Component;
  let fixture: ComponentFixture<Car2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Car2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Car2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
