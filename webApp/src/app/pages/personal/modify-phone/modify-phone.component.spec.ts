import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPhoneComponent } from './modify-phone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {YzSubmitButtonTestModule} from '../../../func/yz-submit-button/yz-submit-button-test.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('ModifyPhoneComponent', () => {
  let component: ModifyPhoneComponent;
  let fixture: ComponentFixture<ModifyPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyPhoneComponent ],
        imports: [
          RouterTestingModule,
          FormsModule,
          ReactiveFormsModule,
          YzSubmitButtonTestModule
        ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
