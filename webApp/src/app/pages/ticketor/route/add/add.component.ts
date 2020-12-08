import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Station } from '../../../../common/station';
import { Route } from '../../../../common/route';
import { CommonService } from '../../../../service/common.service';
import { Router } from '@angular/router';
import { RouteService } from '../../../../service/route.service';
import { HttpErrorResponse } from '../../../../base/Http-error-response';
import { Bus } from '../../../../common/bus';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {
  routeForm: FormGroup;
  startStation: Station;
  endStation: Station;
  bus: Bus;

  route: Route;
  submitting = false;

  constructor(private commonService: CommonService,
              private router: Router,
              private builder: FormBuilder,
              private routeService: RouteService) {
  }

  ngOnInit(): void {
    this.routeForm = this.builder.group({
      bus: null,
      startStation: null,
      endStation: null,
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
    }, {updateOn: 'blur'});
  }

  get startTime(): AbstractControl {
    return this.routeForm.get('startTime');
  }

  get endTime(): AbstractControl {
    return this.routeForm.get('endTime');
  }

  public saveRoute(route: Route): void {
    this.submitting = true;
    this.routeService.save(route).subscribe(() => {
      this.submitting = false;
      this.commonService.success(() => {
        this.router.navigateByUrl('/ticketor/route');
      }, '车次保存成功');
    }, (response: HttpErrorResponse) => {
      this.submitting = false;
      this.commonService.error(() => {
      }, '车次保存失败');
    });
  }

  submit(): void {
    this.routeForm.setValue({
      bus: this.bus,
      startStation: this.startStation,
      endStation: this.endStation,
      startTime: this.routeForm.get('startTime').value,
      endTime: this.routeForm.get('endTime').value,
    });
    this.saveRoute(this.routeForm.value);
  }

  bindStartStation(station: Station): void {
    this.startStation = station;
  }

  bindEndStation(station: Station): void {
    this.endStation = station;
  }

  bindBus(bus: Bus): void {
    this.bus = bus;
  }
}
