import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSearchComponent } from './route-search.component';

describe('RouteSearchComponent', () => {
  let component: RouteSearchComponent;
  let fixture: ComponentFixture<RouteSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
