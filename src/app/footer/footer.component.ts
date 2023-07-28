import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from '../home/home.service';
import { SharedService } from '../shared.service';
import { environment } from '../../environments/environment';

interface socialMedia {
  link: string;
  imgMob: string;
  imgTab: string;
  imgDesk: string;
  imgUrl?: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  isModalActive = false;
  apiUrl = environment.apiUrl + `/requestcall/`;

  registerForm!: FormGroup;

  socialMedias: socialMedia[] = [
    {
      link: 'https://www.linkedin.com/company/mobigarage/',
      imgMob: '../../assets/footer/mob/linkedin.png',
      imgTab: '../../assets/footer/tab/linkedin.png',
      imgDesk: '../../assets/footer/desk/linkedin.png',
    },
    {
      link: 'https://instagram.com/mobi_garage?igshid=ZDdkNTZiNTM=',
      imgMob: '../../assets/footer/mob/instagram.png',
      imgTab: '../../assets/footer/tab/instagram.png',
      imgDesk: '../../assets/footer/desk/instagram.png',
    },
    {
      link: 'https://twitter.com/mobi_garage',
      imgMob: '../../assets/footer/mob/twitter.png',
      imgTab: '../../assets/footer/tab/twitter.png',
      imgDesk: '../../assets/footer/desk/twitter.png',
    },
    {
      link: 'https://www.facebook.com/mobigarage?mibextid=ZbWKwL',
      imgMob: '../../assets/footer/mob/facebook.png',
      imgTab: '../../assets/footer/tab/facebook.png',
      imgDesk: '../../assets/footer/desk/facebook.png',
    },
    {
      link: 'https://www.youtube.com/@mobigarage3509/featured',
      imgMob: '../../assets/footer/mob/youtube.png',
      imgTab: '../../assets/footer/tab/youtube.png',
      imgDesk: '../../assets/footer/desk/youtube.png',
    },
  ];

  contents = [
    {
      heading: 'Company',
      subheadings: [
        { title: 'About Us', href: '' },
        { title: 'Our Products', href: '' },
        { title: 'Our Solutions', href: '' },
        { title: 'Our Blogs', href: '' },
        { title: 'Policies', href: '' },
        { title: 'Terms and Conditions', href: '' },
      ],
    },
    {
      heading: 'Get in Touch',
      subheadings: [
        { title: '+91 9999123511', href: 'tel:+91 9999123511' },
        {
          title: 'contact@mobigarage.com',
          href: 'mailto:contact@mobigarage.com',
        },
      ],
    },
  ];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [
        Validators.required,
        this.sharedService.onlyNumbers(),
        Validators.minLength(10),
      ]),
    });
    this.setImageUrls(window.innerWidth);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    this.setImageUrls(event.target.innerWidth);
  }

  setImageUrls(width: number) {
    this.socialMedias.forEach((socialMedia) => {
      socialMedia.imgUrl = this.getImageUrl(
        width,
        socialMedia.imgMob,
        socialMedia.imgTab,
        socialMedia.imgDesk
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

  onlyNums(event: { which: any; keyCode: any }): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  onlyAlphabets(event: KeyboardEvent) {
    this.sharedService.allowOnlyApha(event)

  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.isModalActive = true;
      console.log(this.registerForm);
      setTimeout(() => {
        this.isModalActive = false;
        this.registerForm.reset();
      }, 3000);
      this.sharedService.onCreatePost(this.registerForm.value, this.apiUrl);
    }
  }
}
