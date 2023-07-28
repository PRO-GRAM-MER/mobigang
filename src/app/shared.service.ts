import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  isModalActive: boolean = false;
  phoneNumber!: string;
  otpNumber!: number;
  otpEnterd!: number;
  private mobileNumber = new BehaviorSubject<string>('');
  phoneNumber$ = this.mobileNumber.asObservable();
  private otp = new BehaviorSubject<number>(0);
  otp$ = this.otp.asObservable();
  constructor(private http: HttpClient){}

  shareMobNumber(mob: string) {
    this.mobileNumber.next(mob);
  }
  shareOtp(otp: number) {
    this.otp.next(otp);
    this.otpNumber = otp;
  }

  convertToNumber(otp: Array<string>): number {
    return +otp.join('');
  }


  onlyNumbers() {
    return Validators.pattern('^[0-9]*$');
  }

  onCreatePost(formData: FormData, api: string) {
    this.http.post(api, formData).subscribe(response=>{
      console.log(response);
    })
  }
  allowOnlyNumbers(event: KeyboardEvent): boolean {
    // Get the key code of the pressed key
    const keyCode = event.which || event.keyCode;

    // Allow: backspace and delete
    if (keyCode == 8 || keyCode == 32) {
      return true;
    }

    // Prevent all other keys from being typed
    event.preventDefault();
    return false;
  }
  allowOnlyApha(event: KeyboardEvent): boolean {
    const keyCode = event.which || event.keyCode;

    // Allow: backspace and delete
    if (keyCode === 8 || keyCode === 32) {
      return true;
    }

    // Allow: alphabets
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
      return true;
    }

    // Prevent all other keys from being typed
    event.preventDefault();
    return false;
  }


}
