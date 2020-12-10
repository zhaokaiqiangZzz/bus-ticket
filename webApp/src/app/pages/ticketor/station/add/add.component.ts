import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '../../../../base/Http-error-response';
import { Station } from '../../../../common/station';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../../../service/common.service';
import { Router } from '@angular/router';
import { StationService } from '../../../../service/station.service';
import { City } from '../../../../common/city';
import { StationNameAsyncValidator } from '../../../../validator/station-name-async-validator';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {
  stationForm: FormGroup;
  city: City;

  station: Station;
  submitting = false;

  constructor(private commonService: CommonService,
              private router: Router,
              private builder: FormBuilder,
              private stationService: StationService,
              private stationNameAsyncValidator: StationNameAsyncValidator) {
  }

  ngOnInit(): void {
    this.stationForm = this.builder.group({
      name: ['', [Validators.required], [this.stationNameAsyncValidator]],
      city: null
    }, {updateOn: 'blur'});
  }

  get name(): AbstractControl {
    return this.stationForm.get('name');
  }

  public saveStation(station: Station): void {
    this.submitting = true;
    this.stationService.save(station).subscribe(() => {
      this.submitting = false;
      this.commonService.success(() => {
        this.router.navigateByUrl('/ticketor/station');
      }, '车站保存成功');
    }, (response: HttpErrorResponse) => {
      this.submitting = false;
      this.commonService.error(() => {
      }, '车站保存失败');
    });
  }

  submit(): void {
    this.stationForm.setValue({name: this.stationForm.get('name').value, city: this.city});
    this.saveStation(this.stationForm.value);
  }

  bindCity(city: City): void {
    this.city = city;
  }
}
