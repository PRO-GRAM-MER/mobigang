import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GetOTPViaSMSRequest, IDefaultAPIResponse, oTpRequest } from './auth.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isVerified: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setAuthenticatedStatus(value: boolean) {
    this.isAuthenticated.next(value);
  }
  setVerifiedStatus(value: boolean) {
    this.isVerified.next(value);
  }

  constructor(private http: HttpClient) { }


  getOTPViaSMS(data: GetOTPViaSMSRequest) {
    return this.http.post<IDefaultAPIResponse>(environment.otpUrl + `/user/send-otp`, data);
  }

  loginOrSignUpWithMobileNumberAndOTP(data: oTpRequest) {
    return this.http.post<IDefaultAPIResponse & { token: string }>(environment.otpUrl + `/user/login-via-otp`, data)
      .pipe(
        map(
          res => {
            if (res && res.success) {
              console.log('token', res.token)
            } else {
              // this.logOut();
            }
            return res;
          }
        )
      );
  }
}
