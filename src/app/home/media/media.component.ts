import { Component, Input, HostListener } from '@angular/core';
import { Media } from '../home.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent {
  medias!: Media[];
  currentIndex = 0;
  transformValue = '0';

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.medias = this.homeService.getMedias();
    this.setImageUrls(window.innerWidth);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    this.setImageUrls(event.target.innerWidth);
  }

  setImageUrls(width: number) {
    this.medias.forEach((media) => {
      media.imgUrl = this.getImageUrl(
        width,
        media.imgMob,
        media.imgTab,
        media.imgDesk
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
    let slideCount = this.medias.length;
    const screenWidth = window.innerWidth;

    if (direction === 'left') {
      this.currentIndex = (this.currentIndex + slideCount - 1) % slideCount;
    } else if (direction === 'right') {
      this.currentIndex = (this.currentIndex + 1) % slideCount;
    }

    if (screenWidth < 764) {
      this.transformValue = `-${this.currentIndex * 12.5}%`;
    } else if (screenWidth < 992) {
      if (direction === 'left') {
        slideCount= 8;
        this.currentIndex = (this.currentIndex + slideCount - 1) % slideCount;
      } else if (direction === 'right') {
        slideCount= 8;
        this.currentIndex = (this.currentIndex + 1) % slideCount;
      }
      this.transformValue = `-${this.currentIndex * 12.5}%`;
    } else {
      this.transformValue = `-${this.currentIndex * 12.5}%`;
    }
  }
}
