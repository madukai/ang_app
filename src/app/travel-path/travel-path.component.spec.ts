import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPathComponent } from './travel-path.component';

describe('TravelPathComponent', () => {
  let component: TravelPathComponent;
  let fixture: ComponentFixture<TravelPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
