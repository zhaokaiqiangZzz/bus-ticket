import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SizeComponent} from './size.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [SizeComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [SizeComponent]
})
export class PageModule {}
