import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomCompComponent } from './bottom-comp.component';

describe('BottomCompComponent', () => {
  let component: BottomCompComponent;
  let fixture: ComponentFixture<BottomCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
