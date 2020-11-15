import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusIndexComponent } from './bus-index.component';

describe('BusIndexComponent', () => {
  let component: BusIndexComponent;
  let fixture: ComponentFixture<BusIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
