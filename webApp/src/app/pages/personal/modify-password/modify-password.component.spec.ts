import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPasswordComponent } from './modify-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {YzSubmitButtonTestModule} from '../../../func/yz-submit-button/yz-submit-button-test.module';

describe('ModifyPasswordComponent', () => {
  let component: ModifyPasswordComponent;
  let fixture: ComponentFixture<ModifyPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyPasswordComponent ],
        imports: [
          FormsModule,
          ReactiveFormsModule,
          YzSubmitButtonTestModule
        ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
