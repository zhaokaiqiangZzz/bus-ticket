import {Component} from '@angular/core';
import {PageComponent} from './page.component';
import {PageTestController} from './page-test.controller';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageStubComponent extends PageComponent {
  constructor(private controller: PageTestController) {
    super();
    this.controller.addUnit(this);
  }
}
