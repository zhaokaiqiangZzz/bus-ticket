import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteIndexComponent } from './route-index.component';

describe('RouteIndexComponent', () => {
  let component: RouteIndexComponent;
  let fixture: ComponentFixture<RouteIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
