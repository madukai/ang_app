import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FibModComponent } from './fib-mod.component';

describe('FibModComponent', () => {
  let component: FibModComponent;
  let fixture: ComponentFixture<FibModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
