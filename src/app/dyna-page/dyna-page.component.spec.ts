import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynaPageComponent } from './dyna-page.component';

describe('DynaPageComponent', () => {
  let component: DynaPageComponent;
  let fixture: ComponentFixture<DynaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
