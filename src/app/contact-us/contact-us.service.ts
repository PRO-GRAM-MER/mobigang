import { Injectable } from '@angular/core';
import { Contact, Heading } from './contactUs.model';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor() { }
  private headings: Heading[] = [
    {
      title: 'Contact Us',
      desc: "Having bulk device needs? Need more variety in stocks? Don’t worry! We’ve got your back.",
      imgMob: '../../../assets/contactUs/mob/head.png',
      imgTab: '../../../assets/contactUs/tab/head.png',
      imgDesk: '../../../assets/contactUs/desk/head.png',
    },
  ];
  private contacts: Contact[] = [
    {
      title: 'Mon-Sat from 10 am to 8 pm',
      desc: "+91-9999123511",
      link: 'tel:+91-9999123511',
      btnText: 'Call us',
      imgMob: '../../../assets/contactUs/mob/call.png',
      imgTab: '../../../assets/contactUs/tab/call.png',
      imgDesk: '../../../assets/contactUs/desk/call.png',
    },
    {
      title: 'For Your Bussiness Needs. . .',
      desc: "contact@mobigarage.com",
      link: 'mailto:contact@mobigarage.com',
      btnText: 'Mail us',
      imgMob: '../../../assets/contactUs/mob/mail.png',
      imgTab: '../../../assets/contactUs/tab/mail.png',
      imgDesk: '../../../assets/contactUs/desk/mail.png',
    },
    {
      title: 'Want to come to office? Welcome',
      desc: "Plot No. 72, Gulmohar Marg, DLF Phase 2, Gurugram - 122002",
      link: 'https://goo.gl/maps/V5AwXCSWBN29WBJY7',
      btnText: 'Locate us',
      imgMob: '../../../assets/contactUs/mob/gps.png',
      imgTab: '../../../assets/contactUs/tab/gps.png',
      imgDesk: '../../../assets/contactUs/desk/gps.png',
    },
  ]

  getHeadings() {
    return this.headings.slice();
  }
  getContacts() {
    return this.contacts.slice();
  }
}
