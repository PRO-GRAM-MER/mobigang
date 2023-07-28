import { Component, HostListener } from '@angular/core';
import { Feedback } from '../home.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
  feedbacks!: Feedback[];
  currentIndex = 0;
  transformValue = '0';

  constructor(private homeService: HomeService) {}
  ngOnInit(): void {
    this.feedbacks = this.homeService.getFeedbacks();
    this.setImageUrls(window.innerWidth);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    this.setImageUrls(event.target.innerWidth);
  }

  setImageUrls(width: number) {
    this.feedbacks.forEach((feedback) => {
      feedback.imgUrl = this.getImageUrl(
        width,
        feedback.imgMob,
        feedback.imgTab,
        feedback.imgDesk
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

  moveSlider(direction: string) {
    const slideCount = this.feedbacks.length;
    const screenWidth = window.innerWidth;

    if (direction === 'left') {
      this.currentIndex = (this.currentIndex + 1) % slideCount;
    } else if (direction === 'right') {
      this.currentIndex = (this.currentIndex + slideCount - 1) % slideCount;
    }

    if (screenWidth < 764) {
      this.transformValue = `-${this.currentIndex * 33.33}%`;
    } else if (screenWidth < 992) {
      this.transformValue = `-${this.currentIndex * 33.33}%`;
    } else {
      this.transformValue = `-${this.currentIndex * 100}%`;
    }
  }
}
