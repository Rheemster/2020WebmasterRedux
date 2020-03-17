import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouttsaComponent } from './abouttsa.component';

describe('AbouttsaComponent', () => {
  let component: AbouttsaComponent;
  let fixture: ComponentFixture<AbouttsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbouttsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbouttsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
