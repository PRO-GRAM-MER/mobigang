import { Component, HostListener, Input, OnInit } from '@angular/core';

import { Partner } from '../home.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss'],
})
export class PartnerComponent implements OnInit {
  @Input() partners!: Partner[];
  @Input() indicators: boolean = true;
  @Input() controls: boolean = true;
  currentSlide = 0;

  constructor(private homeService: HomeService) {}
  ngOnInit(): void {}

  onPrev() {
    this.currentSlide = this.homeService.prevSlide(
      this.currentSlide,
      this.partners
    );
  }
  onNext() {
    this.currentSlide = this.homeService.nextSlide(
      this.currentSlide,
      this.partners
    );
  }
  goToSlide(index: number) {
    this.currentSlide = index;
  }

  currentSlideIndex = 0;

  get dots(): number[] {
    const numDots = Math.ceil(this.partners.length / this.numSlidesPerView());
    return Array(numDots)
      .fill(0)
      .map((_, i) => i);
  }

  numSlidesPerView(): number {
    if (window.innerWidth > 768) {
      return 2;
    } else {
      return 1;
    }
  }

  nextSlide(): void {
    const numSlides = this.partners.length;
    const numSlidesPerView = this.numSlidesPerView();
    if (this.currentSlideIndex + numSlidesPerView < numSlides) {
      this.currentSlideIndex += numSlidesPerView;
    } else {
      this.currentSlideIndex = numSlides - numSlidesPerView;
    }
  }

  prevSlide(): void {
    const numSlidesPerView = this.numSlidesPerView();
    if (this.currentSlideIndex - numSlidesPerView >= 0) {
      this.currentSlideIndex -= numSlidesPerView;
    } else {
      this.currentSlideIndex = 0;
    }
  }

  ToSlide(index: number): void {
    this.currentSlideIndex = index * this.numSlidesPerView();
  }

  onResize(): void {
    this.goToSlide(0);
  }
}
