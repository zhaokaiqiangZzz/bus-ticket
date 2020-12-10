import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Station } from '../../../../common/station';
import { Bus } from '../../../../common/bus';
import { Route } from '../../../../common/route';
import { CommonService } from '../../../../service/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteService } from '../../../../service/route.service';
import { HttpErrorResponse } from '../../../../base/Http-error-response';
import { Assert } from '../../../../utils';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
  routeForm: FormGroup;
  startStation: Station;
  endStation: Station;
  bus: Bus;

  submitting = false;

  constructor(private commonService: CommonService,
              private router: Router,
              private route: ActivatedRoute,
              private builder: FormBuilder,
              private datePipe: DatePipe,
              private routeService: RouteService) {
    this.createForm();
  }

  createForm(): void {
    this.routeForm = this.builder.group({
      bus: null,
      startStation: null,
      endStation: null,
      startTime: new Date(),
      endTime: new Date(),
    }, {updateOn: 'blur'});
  }

  initForm(route: Route): void {
    this.routeForm.setValue({
      bus: route.bus,
      startStation: route.startStation,
      endStation: route.endStation,
      startTime: this.datePipe.transform(new Date(route.startTime), 'yyyy-MM-ddThh:mm:ss'),
      endTime: this.datePipe.transform(new Date(route.endTime), 'yyyy-MM-ddThh:mm:ss'),
    });
    this.bus = route.bus;
    this.startStation = route.startStation;
    this.endStation = route.endStation;
  }

  ngOnInit(): void {
    this.getEditRoute();
  }

  /**
   * 获取要编辑的车次
   */
  public getEditRoute(): void {
    this.route.params.subscribe((params: { id: number }) => {
      this.routeService.getRouteById(params.id).subscribe((data) => {
        Assert.isDefined(data.id, 'id');
        Assert.isDefined(data.bus, 'bus');
        Assert.isDefined(data.startStation, 'startStation');
        Assert.isDefined(data.endStation, 'endStation');
        Assert.isDefined(data.startTime, 'startTime');
        Assert.isDefined(data.endTime, 'endTime');
        this.initForm(data);
      });
    });
  }

  get startTime(): AbstractControl {
    return this.routeForm.get('startTime');
  }

  get endTime(): AbstractControl {
    return this.routeForm.get('endTime');
  }

  public updateRoute(route: Route): void {
    this.submitting = true;
    this.route.params.subscribe(params => {
      this.routeService.update(params.id, route).subscribe(() => {
        this.submitting = false;
        this.commonService.success(() => {
          this.router.navigateByUrl('/ticketor/route');
        }, '车次保存成功');
      }, (response: HttpErrorResponse) => {
        this.submitting = false;
        this.commonService.httpError(response);
      });
    });
  }

  submit(): void {
    this.routeForm.setValue({
      bus: this.bus,
      startStation: this.startStation,
      endStation: this.endStation,
      startTime: new Date(this.routeForm.get('startTime').value).getTime(),
      endTime: new Date(this.routeForm.get('endTime').value).getTime(),
    });
    this.updateRoute(this.routeForm.value);
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
