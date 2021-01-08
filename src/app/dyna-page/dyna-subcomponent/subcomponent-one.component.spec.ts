import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcomponentOneComponent } from './subcomponent-one.component';

describe('SubcomponentOneComponent', () => {
  let component: SubcomponentOneComponent;
  let fixture: ComponentFixture<SubcomponentOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcomponentOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcomponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
