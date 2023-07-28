import { Component, Input, OnInit } from '@angular/core';
import { Banner, Slide } from '../home.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  @Input() banners!: Banner[];
  @Input() indicators: boolean = true;
  @Input() controls: boolean = true;
  currentSlide = 0;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {}

  // onPrev() {
  //   this.currentSlide = this.homeService.prevSlide(
  //     this.currentSlide,
  //     this.slides
  //   );
  // }
  // onNext() {
  //   this.currentSlide = this.homeService.nextSlide(
  //     this.currentSlide,
  //     this.slides
  //   );
  // }
  // goToSlide(index: number) {
  //   this.currentSlide = index;
  // }
}
