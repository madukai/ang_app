import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxColorComponent } from './box-color.component';

describe('BoxColorComponent', () => {
  let component: BoxColorComponent;
  let fixture: ComponentFixture<BoxColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
