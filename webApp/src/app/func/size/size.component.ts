import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {

  @Input()
  size: number;

  @Output()
  changeSize: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  sizeChange(size: number): void {
    this.changeSize.emit(size);
  }
}
