import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from '../../../../common/city';
import { CommonService } from '../../../../service/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from '../../../../service/bus.service';
import { HttpErrorResponse } from '../../../../base/Http-error-response';
import { Bus } from '../../../../common/bus';
import { Assert } from '../../../../utils';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
  busForm: FormGroup;
  city: City;

  bus: Bus;
  submitting = false;

  constructor(private commonService: CommonService,
              private router: Router,
              private route: ActivatedRoute,
              private builder: FormBuilder,
              private busService: BusService) {
    this.createForm();
  }

  createForm(): void {
    this.busForm = this.builder.group({
      busNumber: ['', [Validators.required]],
      seatNumber: ['', [Validators.required]],
    }, {updateOn: 'blur'});
  }

  ngOnInit(): void {
    this.getEditBus();
  }

  /**
   * 获取要编辑的车辆
   */
  public getEditBus(): void {
    this.route.params.subscribe((params: { id: number }) => {
      this.busService.getBusById(params.id).subscribe((data) => {
        Assert.isDefined(data.id, 'id');
        Assert.isDefined(data.busNumber, 'busNumber');
        Assert.isDefined(data.seatNumber, 'seatNumber');
        this.initForm(data);
      });
    });
  }

  get busNumber(): AbstractControl {
    return this.busForm.get('busNumber');
  }
  get seatNumber(): AbstractControl {
    return this.busForm.get('seatNumber');
  }

  public updateBus(bus: Bus): void {
    this.submitting = true;
    this.route.params.subscribe(params => {
      this.busService.update(params.id, bus).subscribe(() => {
        this.submitting = false;
        this.commonService.success(() => {
          this.router.navigateByUrl('/ticketor/bus');
        }, '车辆保存成功');
      }, (response: HttpErrorResponse) => {
        this.submitting = false;
        this.commonService.httpError(response);
      });
    });
  }

  submit(): void {
    this.updateBus(this.busForm.value);
  }

  private initForm(bus: Bus): void {
    this.busForm.setValue({
      busNumber: bus.busNumber,
      seatNumber: bus.seatNumber
    });
  }
}
