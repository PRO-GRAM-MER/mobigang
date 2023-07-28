import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { Observable, Subscription } from 'rxjs';
import { environment } from '../../environments/environment';

import { CanComponentDeactivate } from '../guard/canDeactivate-guard.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, CanComponentDeactivate, OnDestroy {
  changesSaved: boolean = false;
  apiUrl = (environment.apiUrl + `/user/`);
  isModalActive = false;
  roletypes: string[] = ['Retailer', 'Company'];
  registerForm!: FormGroup;
  phoneNumber!: string;
  mobSub!: Subscription;

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private http: HttpClient,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    window.scroll(0,0);
    this.mobSub = this.sharedService.phoneNumber$.subscribe((number) => {
      this.phoneNumber = number;
      console.log(this.phoneNumber);
    });
    this.registerForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      phone: new FormControl(this.phoneNumber, Validators.required),
      email: new FormControl(null),
      roletype: new FormControl('Retailer'),
      state: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      pincode: new FormControl(null, [
        Validators.required,
        Validators.maxLength(6),
        Validators.minLength(6),
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
  onlyAlphabets(event: KeyboardEvent) {
    this.sharedService.allowOnlyApha(event)
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.isModalActive = true;
      this.changesSaved =true;
      this.authService.setVerifiedStatus(true);
      console.log(this.registerForm.value);
      setTimeout(() => {
        this.isModalActive = false;
        this.router.navigate(['/']);
      }, 3000);
      this.sharedService.onCreatePost(this.registerForm.value, this.apiUrl)
      this.registerForm.reset();
    }
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.registerForm && this.changesSaved) {
      return true;
    } else {
      return confirm('Are you sure you want to leave');
    }
  }
  ngOnDestroy(): void {
    this.mobSub.unsubscribe();
    this.authService.setVerifiedStatus(false);
  }
}
