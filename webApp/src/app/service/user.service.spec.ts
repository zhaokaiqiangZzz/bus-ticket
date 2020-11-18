import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { randomNumber } from 'core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;
  const baseUrl = 'user';
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });
  });

  beforeEach(() => {
    httpController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('resetPassword', () => {
    const id = randomNumber();
    let called = false;
    service.resetPassword(id).subscribe(() => {
      called = true;
    });
    const req = httpController.expectOne(`${baseUrl}/resetPassword/${id}`);
    expect(req.request.method).toEqual('PATCH');

    req.flush(null);
    expect(called).toBe(true);
  });
});
