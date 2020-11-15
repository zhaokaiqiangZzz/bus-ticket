import {NgModule} from '@angular/core';
import {PageComponent} from './page.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule
  ],
  exports: [PageComponent]
})
export class PageModule {}
