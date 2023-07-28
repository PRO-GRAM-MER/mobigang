import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { MobilerequestComponent } from './mobilerequest/mobilerequest.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { CanDeactivateGuard } from './guard/canDeactivate-guard.service';
import { VerificationGuard } from './auth/verification.guard';
import { RegisterGuard } from './auth/register.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'products', component: ProductsComponent },
  {path:'solutions', component: SolutionsComponent},
  { path: 'mobile-request', component: MobilerequestComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'otpVerification', canActivate: [VerificationGuard] ,component: OtpVerifyComponent, canDeactivate: [CanDeactivateGuard]},
  { path: 'registration', component: RegisterComponent, canActivate: [RegisterGuard] ,canDeactivate: [CanDeactivateGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
