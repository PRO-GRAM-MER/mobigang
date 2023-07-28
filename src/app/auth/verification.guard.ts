import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../shared.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class VerificationGuard implements CanActivate {
  constructor(private sharedService: SharedService, private authService: AuthService, private router: Router) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuthenticated.value) {

      console.log(this.authService.isAuthenticated.value)

      return true; // User is authenticated, allow access
    } else {
      this.router.navigate(['/mobile-request'])
      // User is not authenticated, redirect to another route
      return false;
    }
  }
}
