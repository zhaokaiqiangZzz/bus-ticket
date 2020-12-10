import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from '../../../../common/city';
import { Bus } from '../../../../common/bus';
import { CommonService } from '../../../../service/common.service';
import { Router } from '@angular/router';
import { BusService } from '../../../../service/bus.service';
import { HttpErrorResponse } from '../../../../base/Http-error-response';
import { BusBusNumberAsyncValidator } from '../../../../validator/bus-busNumber-async-validator';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {
  busForm: FormGroup;
  city: City;

  station: Bus;
  submitting = false;

  constructor(private commonService: CommonService,
              private router: Router,
              private builder: FormBuilder,
              private busService: BusService,
              private busBusNumberAsyncValidator: BusBusNumberAsyncValidator) {
  }

  ngOnInit(): void {
    this.busForm = this.builder.group({
      busNumber: ['', [Validators.required], [this.busBusNumberAsyncValidator]],
      seatNumber: ['', [Validators.required]],
    }, {updateOn: 'blur'});
  }

  get busNumber(): AbstractControl {
    return this.busForm.get('busNumber');
  }
  get seatNumber(): AbstractControl {
    return this.busForm.get('seatNumber');
  }

  public saveBus(bus: Bus): void {
    this.submitting = true;
    this.busService.save(bus).subscribe(() => {
      this.submitting = false;
      this.commonService.success(() => {
        this.router.navigateByUrl('/ticketor/bus');
      }, '车辆保存成功');
    }, (response: HttpErrorResponse) => {
      this.submitting = false;
      this.commonService.error(() => {
      }, '车辆保存失败');
    });
  }

  submit(): void {
    this.saveBus(this.busForm.value);
  }
}
