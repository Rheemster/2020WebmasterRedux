import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottominfoComponent } from './bottominfo.component';

describe('BottominfoComponent', () => {
  let component: BottominfoComponent;
  let fixture: ComponentFixture<BottominfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottominfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottominfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
