import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Station } from '../../../common/station';
import { StationService } from '../../../service/station.service';

@Component({
  selector: 'app-station-select',
  templateUrl: './station-select.component.html',
  styleUrls: ['./station-select.component.sass']
})
export class StationSelectComponent implements OnInit {

  public state = {} as {
    station: Station,
    stations: Array<Station>
  };

  @Input()
  set station(value: Station) {
    this.state.station = value;
  }

  @Output()
  stationSelect: EventEmitter<Station> = new EventEmitter();

  constructor(private stationService: StationService) {
  }

  ngOnInit(): void {
    this.state.station = null;
    this.getAllStation();
  }

  public getAllStation(): void {
    this.stationService.getAll().subscribe((stations: Array<Station>) => {
      this.state.stations = stations;
    });
  }

  public change(station: Station): void {
    this.stationSelect.emit(station);
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
