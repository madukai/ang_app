import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcomponentThreeComponent } from './subcomponent-three.component';

describe('SubcomponentThreeComponent', () => {
  let component: SubcomponentThreeComponent;
  let fixture: ComponentFixture<SubcomponentThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcomponentThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcomponentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
