import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Achievement, Banner, Faq, Feedback, Media, MobiBachat, Partner, Reason, Slide, Value, WhyWe } from './home.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isOpen: boolean = false;
  banners!: Banner[];
  achievements!: Achievement[];
  partners!: Partner[];
  whyWe!: WhyWe[];
  values!: Value[];
  reasons!: Reason[];
  mobiBachat!: MobiBachat[];
  feedbacks!: Feedback[];
  medias!: Media[];
  faqs!: Faq[];

  constructor(
    private homeService: HomeService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.banners = this.homeService.getBanners();
    this.achievements = this.homeService.getAchievements();
    this.partners = this.homeService.getPartners();
    this.whyWe = this.homeService.getWhyWe();
    this.values = this.homeService.getValues();
    this.reasons = this.homeService.getReasons();
    this.mobiBachat = this.homeService.getMobiBachat();
    this.feedbacks = this.homeService.getFeedbacks();
    // this.medias = this.homeService.getMedias();
    this.faqs = this.homeService.getFaqs();
    this.homeService.faqSelected.subscribe((faq: Faq) => {
      faq.open = !faq.open;
    });
    this.setImageUrls(window.innerWidth);
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    this.setImageUrls(event.target.innerWidth);
  }

  setImageUrls(width: number) {
    this.achievements.forEach((achievement) => {
      achievement.imgUrl = this.getImageUrl(
        width,
        achievement.imgMob,
        achievement.imgTab,
        achievement.imgDesk
      );
    });
    this.partners.forEach((partner) => {
      partner.imgUrl = this.getImageUrl(
        width,
        partner.imgMob,
        partner.imgTab,
        partner.imgDesk
      );
    });
    this.whyWe.forEach((content) => {
      content.imgUrl = this.getImageUrl(
        width,
        content.imgMob,
        content.imgTab,
        content.imgDesk
      );
    });
    this.values.forEach((value) => {
      value.imgUrl = this.getImageUrl(
        width,
        value.imgMob,
        value.imgTab,
        value.imgDesk
      );
    });
    this.reasons.forEach((reason) => {
      reason.imgUrl = this.getImageUrl(
        width,
        reason.imgMob,
        reason.imgTab,
        reason.imgDesk
      );
    });
    this.mobiBachat.forEach((content) => {
      content.imgUrl = this.getImageUrl(
        width,
        content.imgMob,
        content.imgTab,
        content.imgDesk
      );
    });
    // this.medias.forEach((media) => {
    //   media.imgUrl = this.getImageUrl(
    //     width,
    //     media.imgMob,
    //     media.imgTab,
    //     media.imgDesk
    //   );
    // });
    this.banners.forEach((banner) => {
      banner.imgUrl= this.getImageUrl(
        width,
        banner.imgMob,
        banner.imgTab,
        banner.imgDesk
      );
    });
  }

  getImageUrl(width: number, mobUrl: string, tabUrl: string, deskUrl: string) {
    if (width < 764) {
      return mobUrl;
    } else if (width < 992) {
      return tabUrl;
    } else {
      return deskUrl;
    }
  }

  onNavigate() {
    this.router.navigate(['mobile-request'], { relativeTo: this.route });
  }
  
}
