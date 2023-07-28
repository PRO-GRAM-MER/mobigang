import { Component, Input, OnInit } from '@angular/core';
import { Offer } from '../aboutUs.model';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AboutUsService } from '../aboutUs.service';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.scss'],
})
export class OfferingsComponent implements OnInit {
  currentSlideIndex = 0;
  @Input() offers!: Offer[];
  sanitizedHtml!: SafeHtml;
  slideTimer: any; 

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.startSlideTimer();
  }

  ngOnDestroy(): void {
    this.stopSlideTimer();
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }

  startSlideTimer(): void {
    this.slideTimer = setInterval(() => {
      this.currentSlideIndex =
        (this.currentSlideIndex + 1) % this.offers.length;
    }, 2000);
  }

  stopSlideTimer(): void {
    clearInterval(this.slideTimer);
  }
}
