import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutskylineComponent } from './aboutskyline.component';

describe('AboutskylineComponent', () => {
  let component: AboutskylineComponent;
  let fixture: ComponentFixture<AboutskylineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutskylineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutskylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
