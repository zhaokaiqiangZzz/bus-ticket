import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusSelectComponent } from './bus-select.component';

describe('BusSelectComponent', () => {
  let component: BusSelectComponent;
  let fixture: ComponentFixture<BusSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
