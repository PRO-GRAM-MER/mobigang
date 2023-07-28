import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mobilerequest',
  templateUrl: './mobilerequest.component.html',
  styleUrls: ['./mobilerequest.component.scss'],
})
export class MobilerequestComponent implements OnInit, OnDestroy {
  mobileForm!: FormGroup;
  countryCode = '91';
  changesSaved: boolean = false;

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.mobileForm = new FormGroup({
      phone: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        this.sharedService.onlyNumbers(),
      ]),
    });
  }
  onlyNums(event: { which: any; keyCode: any }): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  onSubmit(mobileForm: FormGroup) {
    if (mobileForm.valid) {
      this.changesSaved = true;
      const phoneNumber = this.mobileForm.get('phone')?.value;
      this.sharedService.shareMobNumber(phoneNumber);
      this.sharedService.phoneNumber = phoneNumber;
      const reqData = {
        mobile_number: this.countryCode + phoneNumber,
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
  }
  ngOnDestroy(): void {
    this.changesSaved = false
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.changesSaved) {
      return true;
    } else {
      return confirm('Are you sure you want to leave');
    }
  }
}
