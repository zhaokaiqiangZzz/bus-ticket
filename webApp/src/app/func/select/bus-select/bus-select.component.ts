import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bus } from '../../../common/bus';
import { BusService } from '../../../service/bus.service';

@Component({
  selector: 'app-bus-select',
  templateUrl: './bus-select.component.html',
  styleUrls: ['./bus-select.component.sass']
})
export class BusSelectComponent implements OnInit {

  public state = {} as {
    bus: Bus,
    buses: Array<Bus>
  };

  @Input()
  set bus(value: Bus) {
    this.state.bus = value;
  }

  @Output()
  busSelect: EventEmitter<Bus> = new EventEmitter();

  constructor(private busService: BusService) {
  }

  ngOnInit(): void {
    this.state.bus = null;
    this.getAllBus();
  }

  public getAllBus(): void {
    this.busService.getAll().subscribe((buses: Array<Bus>) => {
      this.state.buses = buses;
    });
  }

  public change(bus: Bus): void {
    this.busSelect.emit(bus);
  }

  comparedWithId(item1, item2): boolean {
    const result1: boolean = item1 === item2;
    let result2: boolean;
    if (item1 && item2) {
      result2 = item1.id === item2.id;
    }
    return result1 || result2;
  }
}
