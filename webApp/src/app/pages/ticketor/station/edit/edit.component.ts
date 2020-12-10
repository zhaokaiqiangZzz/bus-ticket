import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '../../../../base/Http-error-response';
import { Station } from '../../../../common/station';
import { Assert } from '../../../../utils';
import { StationService } from '../../../../service/station.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../../../service/common.service';
import { City } from '../../../../common/city';
import { StationNameAsyncValidator } from '../../../../validator/station-name-async-validator';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {

  stationForm: FormGroup;

  station: Station;
  submitting = false;
  city: City;

  constructor(private commonService: CommonService,
              private router: Router,
              private route: ActivatedRoute,
              private builder: FormBuilder,
              private stationService: StationService,
              private stationNameAsyncValidator: StationNameAsyncValidator) {
    this.createForm();
  }

  createForm(): void {
    this.stationForm = this.builder.group({
      name: ['', [Validators.required], [this.stationNameAsyncValidator]],
      city: null
    });
  }

  initForm(station: Station): void {
    this.stationForm.setValue({
      name: station.name,
      city: station.city
    });
    this.city = station.city;
  }

  ngOnInit(): void {
    this.getEditStation();
  }

  /**
   * 获取要编辑的车站
   */
  public getEditStation(): void {
    this.route.params.subscribe((params: { id: number }) => {
      this.stationService.getStationById(params.id).subscribe((data) => {
        Assert.isDefined(data.id, 'id');
        Assert.isDefined(data.name, 'name');
        Assert.isDefined(data.city, 'city');
        this.initForm(data);
      });
    });
  }

  public updateStation(station: Station): void {
    this.submitting = true;
    this.route.params.subscribe(params => {
      this.stationService.update(params.id, station).subscribe(() => {
        this.submitting = false;
        this.commonService.success(() => {
          this.router.navigateByUrl('/ticketor/station');
        }, '车站保存成功');
      }, (response: HttpErrorResponse) => {
        this.submitting = false;
        this.commonService.httpError(response);
      });
    });
  }

  submit(): void {
    this.stationForm.setValue({name: this.stationForm.get('name').value, city: this.city});
    this.updateStation(this.stationForm.value);
  }

  bindCity(city: City): void {
    this.city = city;
  }
}
