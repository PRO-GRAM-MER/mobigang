import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MobilerequestComponent } from './mobilerequest.component';

@Injectable({
  providedIn: 'root',
})
export class MobNumberGuard implements CanDeactivate<MobilerequestComponent> {
  canDeactivate(
    component: MobilerequestComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (component.changesSaved) {
      return true;
    } else {
      return confirm('Are you sure you want to leave?');
    }
  }
}
