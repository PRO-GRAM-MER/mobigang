import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../shared.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuard implements CanActivate {
  constructor(private sharedService: SharedService, private authService: AuthService, private router: Router) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isVerified.value) {
      return true; // User is authenticated, allow access
    } else {
      // User is not authenticated, redirect to another route
      this.router.navigate(['/mobile-request'])
      return false;
    }
  }
  
}
