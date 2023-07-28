import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import {
  Achievement,
  Banner,
  Faq,
  Feedback,
  Media,
  Partner,
  Reason,
  Value,
  WhyWe,
} from './home.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  faqSelected = new Subject<Faq>();

  private banners: Banner[] = [
    {
      imgMob: '../../../assets/home/mob/head.png',
      imgTab: '../../../assets/home/tab/head.png',
      imgDesk: '../../../assets/home/desk/head.png',
    },
  ];
  private achievements: Achievement[] = [
    {
      title: '21,000+',
      desc: 'Partner Retailers',
      imgMob: '../../../assets/home/mob/home.png',
      imgTab: '../../../assets/home/tab/home.png',
      imgDesk: '../../../assets/home/desk/home.png',
    },
    {
      title: '19,000+',
      desc: 'Pincodes Available',
      imgMob: '../../../assets/home/mob/gps.png',
      imgTab: '../../../assets/home/tab/gps.png',
      imgDesk: '../../../assets/home/desk/gps.png',
    },
    {
      title: '10 Lakh+',
      desc: 'Number of Products sold',
      imgMob: '../../../assets/home/mob/mob.png',
      imgTab: '../../../assets/home/tab/mob.png',
      imgDesk: '../../../assets/home/desk/mob.png',
    },
    {
      title: '1,500+',
      desc: 'Tons of E-Waste Saved',
      imgMob: '../../../assets/home/mob/recycle.png',
      imgTab: '../../../assets/home/tab/recycle.png',
      imgDesk: '../../../assets/home/desk/recycle.png',
    },
  ];
  private partners: Partner[] = [
    {
      desc: 'Register with us in 60 seconds',
      imgMob: '../../../assets/home/mob/register.png',
      imgTab: '../../../assets/home/tab/register.png',
      imgDesk: '../../../assets/home/desk/register.png',
    },
    {
      desc: 'Hear back from our team in 60 minutes or less',
      imgMob: '../../../assets/home/mob/support.png',
      imgTab: '../../../assets/home/tab/support.png',
      imgDesk: '../../../assets/home/desk/support.png',
    },
    {
      desc: 'Get the best prices and buy in bulk',
      imgMob: '../../../assets/home/mob/order.png',
      imgTab: '../../../assets/home/tab/order.png',
      imgDesk: '../../../assets/home/desk/order.png',
    },
  ];
  private whyWe: WhyWe[] = [
    {
      title: 'Who Are We?',
      desc: 'MobiGarage is a pre-owned business scaling service platform that specialises in used or previously-owned smartphones, fixing any issues they may have, and reselling them at a lower cost than brand new devices. Our platform offers a variety of services, such as procuring spare parts, cleaning and restoring the phone to like-new condition, and testing and certifying the device to ensure it is in good working order. We also offer warranties on the devices we sell.',
      imgMob: '../../../assets/home/mob/pc.png',
      imgTab: '../../../assets/home/tab/pc.png',
      imgDesk: '../../../assets/home/desk/pc.png',
    },
  ];
  private values: Value[] = [
    {
      desc: 'Wide inventory exposure across 500+models 10+ brands',
      imgMob: '../../../assets/home/mob/inventory.png',
      imgTab: '../../../assets/home/tab/inventory.png',
      imgDesk: '../../../assets/home/desk/inventory.png',
    },
    {
      desc: 'Unbeatable prices at your fingertips',
      imgMob: '../../../assets/home/mob/price.png',
      imgTab: '../../../assets/home/tab/price.png',
      imgDesk: '../../../assets/home/desk/price.png',
    },
    {
      desc: ' Unmatched logistics support for a smooth buying experience',
      imgMob: '../../../assets/home/mob/delivery.png',
      imgTab: '../../../assets/home/tab/delivery.png',
      imgDesk: '../../../assets/home/desk/delivery.png',
    },
    {
      desc: 'Our Genuine Warranty is Your Shield',
      imgMob: '../../../assets/home/mob/shield.png',
      imgTab: '../../../assets/home/tab/shield.png',
      imgDesk: '../../../assets/home/desk/shield.png',
    },
    {
      desc: 'No more, no less - just what you need',
      imgMob: '../../../assets/home/mob/perfect.png',
      imgTab: '../../../assets/home/tab/perfect.png',
      imgDesk: '../../../assets/home/desk/perfect.png',
    },
    {
      desc: 'Unlock new opportunities - Spares, mobile, repair or technology',
      imgMob: '../../../assets/home/mob/unlock.png',
      imgTab: '../../../assets/home/tab/unlock.png',
      imgDesk: '../../../assets/home/desk/unlock.png',
    },
  ];
  private reasons: Reason[] = [
    {
      title: 'Digitalizing India',
      desc: 'We aim to digitise India through an abundant and endless supply of low cost second-hand smartphones. ',
      imgMob: '../../../assets/home/mob/trolley.png',
      imgTab: '../../../assets/home/tab/trolley.png',
      imgDesk: '../../../assets/home/desk/trolley.png',
    },
    {
      title: 'Green India',
      desc: 'We contribute to a greener planet by decreasing the e-waste and increasing the lifecycle of a used device by renewing it. ',
      imgMob: '../../../assets/home/mob/recycle1.png',
      imgTab: '../../../assets/home/tab/recycle1.png',
      imgDesk: '../../../assets/home/desk/recycle1.png',
    },
    {
      title: 'Reaching Locals',
      desc: 'We aspire to knit tier 2 and beyond markets by organising them and making second-hand devices available in every nook and corner of the country.',
      imgMob: '../../../assets/home/mob/report.png',
      imgTab: '../../../assets/home/tab/report.png',
      imgDesk: '../../../assets/home/desk/report.png',
    },
  ];
  private mobiBachat = [
    {
      title: 'Download Bidding App',
      desc: 'Download Bidding App now for the ultimate second-hand device bidding experience.',
      imgMob: '../../../assets/home/mob/man.png',
      imgTab: '../../../assets/home/tab/man.png',
      imgDesk: '../../../assets/home/desk/man.png',
    },
  ];
  private feedbacks: Feedback[] = [
    {
      title: 'Rajinder Kumar',
      subtitle: 'Our Retail partner in Chugawa',
      desc: 'I have been in the second-hand phone retail business for a long time. MobiGarage solved my major problem of not finding enough inventory options. Now, I have access to a huge inventory of second-hand devices, thanks to MobiGarage.',
      imgMob: '../../../assets/home/mob/rajinder.png',
      imgTab: '../../../assets/home/tab/rajinder.png',
      imgDesk: '../../../assets/home/desk/rajinder.png',
    },
    {
      title: 'Ravi Bhushan',
      subtitle: 'our Retail partner in Ambala',
      desc: 'I have not found second- hand mobiles refurbished so brilliantly and at such great price anywhere else. MobiGarage pays close attention to retailer needs.',
      imgMob: '../../../assets/home/mob/ravi.png',
      imgTab: '../../../assets/home/tab/ravi.png',
      imgDesk: '../../../assets/home/desk/ravi.png',
    },
    {
      title: 'Mansingh Chaudhary',
      subtitle: 'Our Retail partner in Hisar',
      desc: 'I always have bulk requirements for refurbished phones. I can only trust MobiGarage because they provide the best prices and warranties on their smartphones.',
      imgMob: '../../../assets/home/mob/mansingh.png',
      imgTab: '../../../assets/home/tab/mansingh.png',
      imgDesk: '../../../assets/home/desk/mansingh.png',
    },
  
  ];
  private medias: Media[] = [
    {
      desc: 'MobiGarage has been processing 20,000 orders a month, growing 3 times annually, the company said, adding that demand for refurbished devices has increased since the first wave of pandemic.',
      link: 'https://www.livemint.com/companies/start-ups/mobigarage-raises-pre-series-a-round-funding-11626070820667.html',
      imgMob: '../../../assets/home/mob/mint.png',
      imgTab: '../../../assets/home/tab/mint.png',
      imgDesk: '../../../assets/home/desk/mint.png',
    },
    {
      desc: 'MobiGarage has had a growth rate of 30 percent month-on-month and 400 percent since the first lockdown in the pandemic.',
      link: 'https://yourstory.com/2020/09/funding-delhi-mobigarage-pre-series-a-sosv-smartphone-repair/amp',
      imgMob: '../../../assets/home/mob/yourStory.png',
      imgTab: '../../../assets/home/tab/yourStory.png',
      imgDesk: '../../../assets/home/desk/yourStory.png',
    },
    {
      desc: "'Having grown 300 per cent during the pandemic, MobiGarage is India's leading player in the mobile e-commerce space, the first of its kind to introduce AI to operationalize a robust supply chain'",
      link: 'https://www.entrepreneur.com/article/376975',
      imgMob: '../../../assets/home/mob/entrepreneur.png',
      imgTab: '../../../assets/home/tab/entrepreneur.png',
      imgDesk: '../../../assets/home/desk/entrepreneur.png',
    },
    {
      desc: 'The company is vigorously using the raised funding to make smartphones available to the Indian grassroots and is growing at a 3 X pace, annually.',
      link: 'https://www.techcircle.in/2021/07/12/mobigarage-raises-undisclosed-round-to-tap--rural-india/',
      imgMob: '../../../assets/home/mob/techCircle.png',
      imgTab: '../../../assets/home/tab/techCircle.png',
      imgDesk: '../../../assets/home/desk/techCircle.png',
    },
    {
      desc: 'More than 500 million people will get on the internet for the first time in the next three years in India, mainly through low-cost refurbished smartphones,” said Pulkit Kapoor, Co-founder of MobiGarage.',
      link: 'https://techstory.in/mobigarage-secured-pre-series-a-round-from-us-based-sosv/',
      imgMob: '../../../assets/home/mob/techStory.png',
      imgTab: '../../../assets/home/tab/techStory.png',
      imgDesk: '../../../assets/home/desk/techStory.png',
    },
    {
      desc: 'MobiGarage has beaten the pandemic blues to show tremendous growth in over 50 Tier 2+ cities.',
      link: 'https://techgraph.co/business/startups/sosv-leads-pre-series-a-round-funding-mobigarage/',
      imgMob: '../../../assets/home/mob/techGraph.png',
      imgTab: '../../../assets/home/tab/techGraph.png',
      imgDesk: '../../../assets/home/desk/techGraph.png',
    },
    {
      desc: 'MobiGarage is innovating India’s multibillion dollar smartphone market with its omnichannel model that ensures hyperlocal services all over India through a unique hub-and-spoke retail model',
      link: 'http://bwdisrupt.businessworld.in/article/MobiGarage-Raises-Pre-Series-A-Round-Funding/12-07-2021-396238/',
      imgMob: '../../../assets/home/mob/bw.png',
      imgTab: '../../../assets/home/tab/bw.png',
      imgDesk: '../../../assets/home/desk/bw.png',
    },
    {
      desc: 'Team MobiGarage gears up for massive tech investment to organise used smartphone market in rural India post Pre-Series A round.',
      link: 'http://bwdisrupt.businessworld.in/article/MobiGarage-Raises-Pre-Series-A-Round-Funding/12-07-2021-396238/',
      imgMob: '../../../assets/home/mob/indianWeb.png',
      imgTab: '../../../assets/home/tab/indianWeb.png',
      imgDesk: '../../../assets/home/desk/indianWeb.png',
    },
  ];
  private faqs: Faq[] = [
    {
      id: 1,
      quest: 'What is a refurbished phone?',
      ans: 'A refurbished phone is a used/old/pre-owned device that is restored to a perfectly working condition',
      open: false,
    },
    {
      id: 2,
      quest: 'Do refurbished phones come with warranty?',
      ans: 'Yes, depending on the need of the customer we offer various warranty plans.',
      open: false,
    },
    {
      id: 3,
      quest: 'What models do you have in your inventory?',
      ans: 'We offer a huge inventory spread over 500 models of 10+ brands and we deal with both Apple and Androids.',
      open: false,
    },
    {
      id: 4,
      quest: 'Do you generate invoices with or without GST?',
      ans: 'Always with GST',
      open: false,
    },
    {
      id: 5,
      quest: 'What kind of inventories you have?',
      ans: 'We have Lots, Individual QC, Flipkart and Amazon inventory, Buy back inventory from our huge supplier base ',
      open: false,
    },
    {
      id: 6,
      quest: 'Do you offer a return?',
      ans: 'Yes, depending on the need of the customer and type of inventory, we provide return services.',
      open: false,
    },
  ];

  constructor() {}

  getBanners() {
    return this.banners.slice();
  }
  getAchievements() {
    return this.achievements.slice();
  }
  getPartners() {
    return this.partners.slice();
  }
  getWhyWe() {
    return this.whyWe.slice();
  }
  getValues() {
    return this.values.slice();
  }
  getReasons() {
    return this.reasons.slice();
  }
  getMobiBachat() {
    return this.mobiBachat.slice();
  }
  getFeedbacks() {
    return this.feedbacks.slice();
  }
  getMedias() {
    return this.medias.slice();
  }
  getFaqs() {
    return this.faqs.slice();
  }
  prevSlide(currentSlide: number, slides: any[]) {
    return currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  }
  nextSlide(currentSlide: number, slides: any[]) {
    return currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  }
}
