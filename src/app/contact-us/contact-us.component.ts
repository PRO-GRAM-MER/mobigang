import { Component, HostListener, OnInit } from '@angular/core';
import { ContactUsService } from './contact-us.service';
import { Contact, Heading } from './contactUs.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  headings!: Heading[];
  contacts!: Contact[];

  constructor(private contactUsService: ContactUsService) {}

  ngOnInit(): void {
    this.headings = this.contactUsService.getHeadings();
    this.contacts = this.contactUsService.getContacts();
    this.setImageUrls(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    // update the image URLs when the window size changes
    this.setImageUrls(event.target.innerWidth);
  }
  setImageUrls(width: number) {
    this.headings.forEach((heading) => {
      heading.imgUrl = this.getImageUrl(
        width,
        heading.imgMob,
        heading.imgTab,
        heading.imgDesk
      );
    });

    this.contacts.forEach((contact) => {
      contact.imgUrl = this.getImageUrl(
        width,
        contact.imgMob,
        contact.imgTab,
        contact.imgDesk
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
}
