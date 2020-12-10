import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { StationService } from '../service/station.service';

@Injectable({
  providedIn: 'root'
})
export class StationNameAsyncValidator implements AsyncValidator {

  constructor(private stationService: StationService) {
  }

  /**
   * 学院名异步验证器
   */
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.stationService.nameExist(control.value)
      .pipe(map(result => result ? {unique: true} : null),
        catchError(() => of(null)));
  }
}
