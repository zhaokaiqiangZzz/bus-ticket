import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Station } from '../../../../common/station';
import { Bus } from '../../../../common/bus';
import { Route } from '../../../../common/route';
import { CommonService } from '../../../../service/common.service';
import { Router } from '@angular/router';
import { City } from '../../../../common/city';

@Component({
  selector: 'app-route-search',
  templateUrl: './route-search.component.html',
  styleUrls: ['./route-search.component.sass']
})
export class RouteSearchComponent implements OnInit {
  routeForm: FormGroup;
  startCity: City;
  endCity: City;
  bus: Bus;

  route: Route;
  submitting = false;

  constructor(private commonService: CommonService,
              private router: Router,
              private builder: FormBuilder) {
  }

  ngOnInit(): void {
    this.routeForm = this.builder.group({
      startStation: null,
      endStation: null,
      startTime: new Date(),
    }, {updateOn: 'blur'});
  }

  get startTime(): AbstractControl {
    return this.routeForm.get('startTime');
  }

  submit(): void {
    this.router.navigateByUrl('/passenger/route/' + this.startCity.id + '/' + this.endCity.id + '/'
      + new Date(this.routeForm.get('startTime').value).getTime());
  }

  bindStartCity(city: City): void {
    this.startCity = city;
  }

  bindEndCity(city: City): void {
    this.endCity = city;
  }
}
