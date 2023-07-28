import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ImageSliderComponent } from './home/image-slider/image-slider.component';
import { AchievementComponent } from './home/achievement/achievement.component';
import { PartnerComponent } from './home/partner/partner.component';
import { ValuesComponent } from './home/values/values.component';
import { MobiComponent } from './home/mobi/mobi.component';
import { FeedbackComponent } from './home/feedback/feedback.component';
import { MediaComponent } from './home/media/media.component';
import { FaqComponent } from './home/faq/faq.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
import { MobilerequestComponent } from './mobilerequest/mobilerequest.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LandingComponent } from './about-us/landing/landing.component';
import { OfferingsComponent } from './about-us/offerings/offerings.component';
import { VisionComponent } from './about-us/vision/vision.component';
import { MissionComponent } from './about-us/mission/mission.component';
import { CultureComponent } from './about-us/culture/culture.component';
import { PartnerSlideComponent } from './about-us/partner-slide/partner-slide.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeadComponent } from './contact-us/head/head.component';
import { ContactsComponent } from './contact-us/contacts/contacts.component';
import { ProductsComponent } from './products/products.component';
import { IntroComponent } from './products/intro/intro.component';
import { InspectionComponent } from './products/inspection/inspection.component';
import { BrandsComponent } from './products/brands/brands.component';
import { InventoriesComponent } from './products/inventories/inventories.component';
import { SparePartsComponent } from './products/spare-parts/spare-parts.component';
import { SpareTypesComponent } from './products/spare-types/spare-types.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { TitleComponent } from './solutions/title/title.component';
import { DiagnosticComponent } from './solutions/diagnostic/diagnostic.component';
import { DecisionComponent } from './solutions/decision/decision.component';
import { OptimizeComponent } from './solutions/optimize/optimize.component';
import { LiquidComponent } from './solutions/liquid/liquid.component';
import { CanDeactivateGuard } from './guard/canDeactivate-guard.service';
import { SrollUpDirective } from './directives/sroll-up.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ImageSliderComponent,
    AchievementComponent,
    PartnerComponent,
    ValuesComponent,
    MobiComponent,
    FeedbackComponent,
    MediaComponent,
    FaqComponent,
    RegisterComponent,
    OtpVerifyComponent,
    MobilerequestComponent,
    AboutUsComponent,
    LandingComponent,
    OfferingsComponent,
    VisionComponent,
    MissionComponent,
    CultureComponent,
    PartnerSlideComponent,
    ContactUsComponent,
    HeadComponent,
    ContactsComponent,
    ProductsComponent,
    IntroComponent,
    InspectionComponent,
    BrandsComponent,
    InventoriesComponent,
    SparePartsComponent,
    SpareTypesComponent,
    SolutionsComponent,
    TitleComponent,
    DiagnosticComponent,
    DecisionComponent,
    OptimizeComponent,
    LiquidComponent,
    SrollUpDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
