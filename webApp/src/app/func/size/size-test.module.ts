import {NgModule} from '@angular/core';
import {SizeStubComponent} from './size-stub.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SizeTestController} from './size-test.controller';

@NgModule({
  declarations: [
    SizeStubComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    SizeStubComponent
  ],
  providers: [
    SizeTestController
  ]
})
export class SizeTestModule {}
