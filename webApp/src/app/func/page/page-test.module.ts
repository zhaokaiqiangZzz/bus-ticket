import {NgModule} from '@angular/core';
import {PageStubComponent} from './page-stub.component';
import {CommonModule} from '@angular/common';
import {PageTestController} from './page-test.controller';

@NgModule({
  declarations: [
    PageStubComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageStubComponent
  ],
  providers: [
    PageTestController
  ]
})
export class PageTestModule {}
