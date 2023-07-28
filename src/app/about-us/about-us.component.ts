import { Component, HostListener, OnInit } from '@angular/core';
import { Culture, heading, Mission, Offer, Partner, Vision } from './aboutUs.model';

import { AboutUsService } from './aboutUs.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit{
  headings!: heading[];
  offers!: Offer[];
  visions!: Vision[];
  missions!: Mission[];
  cultures!: Culture[];
  partners!: Partner[];

  constructor(private aboutUsService: AboutUsService) {}

  ngOnInit(): void {
    this.headings = this.aboutUsService.getHeadings();
    this.offers = this.aboutUsService.getOffers();
    this.visions = this.aboutUsService.getVisions();
    this.missions = this.aboutUsService.getMissions();
    this.cultures = this.aboutUsService.getCultures();
    this.partners = this.aboutUsService.getPartners();
    this.setImageUrls(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    // update the image URLs when the window size changes
    this.setImageUrls(event.target.innerWidth);
  }
  setImageUrls(width: number) {
    this.headings.forEach((heading) => {
      heading.imgUrl = this.getImageUrl(width, heading.imgMob, heading.imgTab, heading.imgDesk);
    });
  
    this.visions.forEach((vision) => {
      vision.imgUrl = this.getImageUrl(width, vision.imgMob, vision.imgTab, vision.imgDesk);
    });
  
    this.missions.forEach((mission) => {
      mission.imgUrl = this.getImageUrl(width, mission.imgMob, mission.imgTab, mission.imgDesk);
    });
  
    this.cultures.forEach((culture) => {
      culture.imgUrl = this.getImageUrl(width, culture.imgMob, culture.imgTab, culture.imgDesk);
    });
  
    this.partners.forEach((partner) => {
      partner.imgUrl = this.getImageUrl(width, partner.imgMob, partner.imgTab, partner.imgDesk);
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


}
