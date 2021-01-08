import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcomponentTwoComponent } from './subcomponent-two.component';

describe('SubcomponentTwoComponent', () => {
  let component: SubcomponentTwoComponent;
  let fixture: ComponentFixture<SubcomponentTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcomponentTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcomponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
