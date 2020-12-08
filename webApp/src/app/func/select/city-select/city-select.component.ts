import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { City } from '../../../common/city';
import { CityService } from '../../../service/city.service';

@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html',
  styleUrls: ['./city-select.component.sass']
})
export class CitySelectComponent implements OnInit {

  public state = {} as {
    city: City,
    citys: Array<City>
  };

  @Input()
  set city(value: City) {
    this.state.city = value;
  }

  @Output()
  citySelect: EventEmitter<City> = new EventEmitter();

  constructor(private cityService: CityService) {
  }

  ngOnInit(): void {
    this.state.city = null;
    this.getAllCity();
  }

  public getAllCity(): void {
    this.cityService.getAll().subscribe((citys: Array<City>) => {
      this.state.citys = citys;
    });
  }

  public change(city: City): void {
    this.citySelect.emit(city);
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
