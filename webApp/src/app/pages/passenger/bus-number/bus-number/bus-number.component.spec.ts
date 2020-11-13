import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusNumberComponent } from './bus-number.component';

describe('BusNumberComponent', () => {
  let component: BusNumberComponent;
  let fixture: ComponentFixture<BusNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
