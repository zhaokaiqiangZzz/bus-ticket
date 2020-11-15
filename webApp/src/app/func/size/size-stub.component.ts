import {Component} from '@angular/core';
import {SizeComponent} from './size.component';
import {SizeTestController} from './size-test.controller';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeStubComponent extends SizeComponent {
  constructor(private controller: SizeTestController) {
    super();
    this.controller.addUnit(this);
  }
}
