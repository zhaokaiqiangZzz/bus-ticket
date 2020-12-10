import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { BusService } from '../service/bus.service';

@Injectable({
  providedIn: 'root'
})
export class BusBusNumberAsyncValidator implements AsyncValidator {

  constructor(private busService: BusService) {
  }

  /**
   * 学院名异步验证器
   */
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.busService.busNumberExist(control.value)
      .pipe(map(result => result ? {unique: true} : null),
        catchError(() => of(null)));
  }
}
