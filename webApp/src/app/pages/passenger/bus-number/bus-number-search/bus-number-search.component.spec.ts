import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusNumberSearchComponent } from './bus-number-search.component';

describe('BusNumberSearchComponent', () => {
  let component: BusNumberSearchComponent;
  let fixture: ComponentFixture<BusNumberSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusNumberSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusNumberSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
