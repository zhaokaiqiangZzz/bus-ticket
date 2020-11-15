import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusEditComponent } from './bus-edit.component';

describe('BusEditComponent', () => {
  let component: BusEditComponent;
  let fixture: ComponentFixture<BusEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
