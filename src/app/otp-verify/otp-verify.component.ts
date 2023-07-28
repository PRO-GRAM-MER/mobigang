import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CanComponentDeactivate } from '../guard/canDeactivate-guard.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.scss'],
})
export class OtpVerifyComponent
  implements OnInit, CanComponentDeactivate, OnDestroy
{
  changesSaved: boolean = false;
  otpForm!: FormGroup;
  mobileNumber: string = '';
  mobSub!: Subscription;
  destroy$: Subject<boolean> = new Subject<boolean>();
  otp = '';
  resend: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.mobSub = this.sharedService.phoneNumber$
      .pipe(takeUntil(this.destroy$))
      .subscribe((phoneNumber) => {
        this.sharedService.phoneNumber = phoneNumber;
        this.mobileNumber = this.sharedService.phoneNumber;
      });

    this.otpForm = new FormGroup({
      otp: new FormArray([
        new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(1),
            Validators.pattern('[0-9]*'),
            this.sharedService.onlyNumbers(),
          ])
        ),
        new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(1),
            Validators.pattern('[0-9]*'),
            this.sharedService.onlyNumbers(),
          ])
        ),
        new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(1),
            Validators.pattern('[0-9]*'),
            this.sharedService.onlyNumbers(),
          ])
        ),
        new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(1),
            Validators.pattern('[0-9]*'),
            this.sharedService.onlyNumbers(),
          ])
        ),
      ]),
    });
  }

  onDigitKeyUp(event: any, nextDigit: number) {
    const currentDigit = event.target.value;
    const previousDigit = nextDigit - 1;

    if (currentDigit.length === 1) {
      const nextField = 'otp' + nextDigit;
      this.otpForm.get(nextField)?.markAsUntouched();
      this.otpForm.get(nextField)?.updateValueAndValidity();
      document.getElementById(nextField)?.focus();
    } else if (currentDigit.length === 0) {
      const prevField = 'otp' + previousDigit;
      this.otpForm.get(prevField)?.markAsUntouched();
      this.otpForm.get(prevField)?.updateValueAndValidity();
      document.getElementById(prevField)?.focus();
    }
  }
  onlyNumber(event: KeyboardEvent) {
    this.sharedService.allowOnlyNumbers(event);
  }

  onVerify() {
    if (this.otpForm.valid) this.changesSaved = true;
    const reqData = {
      mobile_number: '91' + this.sharedService.phoneNumber,
      otp: this.otpForm.value.otp.join(''),
    };
    this.authService.loginOrSignUpWithMobileNumberAndOTP(reqData).subscribe(
      (res) => {
        console.log('Res for loginOrSignUpWithMobileNumberAndOTP');
        console.log(res);
        if (res && res.success && res.token) {
          this.authService.setVerifiedStatus(true);
          this.router.navigate(['/registration']);
          console.log('Success', res.message);
        } else {
          alert(res.message);
        }
      },
      (error) => {
        console.log('Error for loginOrSignUpWithMobileNumberAndOTP');
        console.error(error);
      }
    );
  }
  onResend() {
    const reqData = {
      mobile_number: '91' + this.sharedService.phoneNumber,
    };
    this.authService.getOTPViaSMS(reqData).subscribe(
      (res) => {
        console.log('Res for getOTPViaSMS');
        console.log(res);
        if (res && res.success) {
          this.authService.setAuthenticatedStatus(true);
          this.router.navigate(['/otpVerification']);
          console.log('Success', res.message);
        } else {
          alert(res.message);
        }
      },
      (error) => {
        console.log('Error for getOTPViaSMS');
        console.error(error);
      }
    );
  }

  ngOnDestroy(): void {
    this.sharedService.phoneNumber = '';
    this.mobSub.unsubscribe();
    this.changesSaved = false;
    this.authService.setAuthenticatedStatus(false);
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.changesSaved) {
      return true;
    } else {
      return confirm('Are you sure you want to leave');
    }
  }
}
