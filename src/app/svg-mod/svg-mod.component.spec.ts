import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgModComponent } from './svg-mod.component';

describe('SvgModComponent', () => {
  let component: SvgModComponent;
  let fixture: ComponentFixture<SvgModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
