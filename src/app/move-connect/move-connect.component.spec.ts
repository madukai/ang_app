import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveConnectComponent } from './move-connect.component';

describe('MoveConnectComponent', () => {
  let component: MoveConnectComponent;
  let fixture: ComponentFixture<MoveConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
