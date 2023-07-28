export interface Menu {
  title?: string;
  subMenu: string[];
}
export interface Banner {
  imgMob: string;
  imgTab: string;
  imgDesk: string;
  imgUrl?: string;
  
}

export interface Slide {
  title: string;
  imgMob: string;
  imgTab: string;
  imgDesk: string;
  imgUrl?: string;
}
export interface Achievement {
  title: string;
  desc: string;
  imgMob: string;
  imgTab: string;
  imgDesk: string;
  imgUrl?: string;
}
export interface Partner {
  desc: string;
  imgMob: string;
  imgTab: string;
  imgDesk: string;
  imgUrl?: string;
}
export interface WhyWe {
  title: string;
  desc: string;
  imgMob: string;
  imgTab: string;
  imgDesk: string;
  imgUrl?: string;
}

export interface Value {
  desc: string;
  imgMob: string;
  imgTab: string;
  imgDesk: string;
  imgUrl?: string;
}
export interface Reason {
  title: string;
  desc: string;
  imgMob: string;
  imgTab: string;
  imgDesk: string;
  imgUrl?: string;
}
export interface MobiBachat {
  title: string;
  desc: string;
  imgMob: string;
  imgTab: string;
  imgDesk: string;
  imgUrl?: string;

}
export interface Feedback {
  title: string;
  subtitle: string;
  desc: string;
  imgMob: string;
  imgTab: string;
  imgDesk: string;
  imgUrl?: string;
}
export interface Media {
  desc: string;
  link: string;
  imgMob: string;
  imgTab: string;
  imgDesk: string;
  imgUrl?: string;
}
export interface Faq {
  id: number;
  quest: string;
  ans: string;
  open: boolean;
}
