import { Injectable } from '@angular/core';
import {
  Brand,
  Head,
  Inventory,
  Spare,
  SpareType,
  Test,
} from './products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private heads: Head[] = [
    {
      title: 'Our Products',
      desc: 'Find your perfect phone at the perfect price with our refurbished collection.',
      btn: 'Contact us',
      imgMob: '../../../assets/products/mob/head.png',
      imgTab: '../../../assets/products/tab/head.png',
      imgDesk: '../../../assets/products/desk/head.png',
    },
  ];
  private tests: Test[] = [
    {
      title: 'Rigorous inspection',
      desc: 'Testing process up to 51 quality checkpoints',
      imgMob: '../../../assets/products/mob/inspection.png',
      imgTab: '../../../assets/products/tab/inspection.png',
      imgDesk: '../../../assets/products/desk/inspection.png',
    },
    {
      title: 'Unbeatable prices',
      desc: 'Prices that are super easy on your pocket',
      imgMob: '../../../assets/products/mob/price.png',
      imgTab: '../../../assets/products/tab/price.png',
      imgDesk: '../../../assets/products/desk/price.png',
    },
    {
      title: 'Warranty',
      desc: 'Select products are backed by a trusted warranty',
      imgMob: '../../../assets/products/mob/warranty.png',
      imgTab: '../../../assets/products/tab/warranty.png',
      imgDesk: '../../../assets/products/desk/warranty.png',
    },
    {
      title: 'Doorstep delivery service',
      desc: 'Hassle-free pan India delivery of our products',
      imgMob: '../../../assets/products/mob/delivery.png',
      imgTab: '../../../assets/products/tab/delivery.png',
      imgDesk: '../../../assets/products/desk/delivery.png',
    },
  ];
  private brands: Brand[] = [
    {
      id: 1,

      imgMob: '../../../assets/products/mob/Oneplus.png',
      imgTab: '../../../assets/products/tab/Oneplus.png',
      imgDesk: '../../../assets/products/desk/Oneplus.png',
    },
    {
      id: 2,
      imgMob: '../../../assets/products/mob/Oppo.png',
      imgTab: '../../../assets/products/tab/Oppo.png',
      imgDesk: '../../../assets/products/desk/Oppo.png',
    },
    {
      id: 3,
      imgMob: '../../../assets/products/mob/Nokia.png',
      imgTab: '../../../assets/products/tab/Nokia.png',
      imgDesk: '../../../assets/products/desk/Nokia.png',
    },
    {
      id: 4,
      imgMob: '../../../assets/products/mob/Motorola.png',
      imgTab: '../../../assets/products/tab/Motorola.png',
      imgDesk: '../../../assets/products/desk/Motorola.png',
    },
    {
      id: 5,
      imgMob: '../../../assets/products/mob/Samsung.png',
      imgTab: '../../../assets/products/tab/Samsung.png',
      imgDesk: '../../../assets/products/desk/Samsung.png',
    },
    {
      id: 6,
      imgMob: '../../../assets/products/mob/Apple.png',
      imgTab: '../../../assets/products/tab/Apple.png',
      imgDesk: '../../../assets/products/desk/Apple.png',
    },
    {
      id: 7,
      imgMob: '../../../assets/products/mob/Realme.png',
      imgTab: '../../../assets/products/tab/Realme.png',
      imgDesk: '../../../assets/products/desk/Realme.png',
    },
    {
      id: 8,
      imgMob: '../../../assets/products/mob/Techno.png',
      imgTab: '../../../assets/products/tab/Techno.png',
      imgDesk: '../../../assets/products/desk/Techno.png',
    },
    {
      id: 9,
      imgMob: '../../../assets/products/mob/Vivo.png',
      imgTab: '../../../assets/products/tab/Vivo.png',
      imgDesk: '../../../assets/products/desk/Vivo.png',
    },
    {
      id: 10,
      imgMob: '../../../assets/products/mob/Xiomi.png',
      imgTab: '../../../assets/products/tab/Xiomi.png',
      imgDesk: '../../../assets/products/desk/Xiomi.png',
    },
    {
      id: 1,

      imgMob: '../../../assets/products/mob/Oneplus.png',
      imgTab: '../../../assets/products/tab/Oneplus.png',
      imgDesk: '../../../assets/products/desk/Oneplus.png',
    },
    {
      id: 2,
      imgMob: '../../../assets/products/mob/Oppo.png',
      imgTab: '../../../assets/products/tab/Oppo.png',
      imgDesk: '../../../assets/products/desk/Oppo.png',
    },
    {
      id: 3,
      imgMob: '../../../assets/products/mob/Nokia.png',
      imgTab: '../../../assets/products/tab/Nokia.png',
      imgDesk: '../../../assets/products/desk/Nokia.png',
    },
    {
      id: 4,
      imgMob: '../../../assets/products/mob/Motorola.png',
      imgTab: '../../../assets/products/tab/Motorola.png',
      imgDesk: '../../../assets/products/desk/Motorola.png',
    },
    {
      id: 5,
      imgMob: '../../../assets/products/mob/Samsung.png',
      imgTab: '../../../assets/products/tab/Samsung.png',
      imgDesk: '../../../assets/products/desk/Samsung.png',
    },
    {
      id: 6,
      imgMob: '../../../assets/products/mob/Apple.png',
      imgTab: '../../../assets/products/tab/Apple.png',
      imgDesk: '../../../assets/products/desk/Apple.png',
    },
    {
      id: 7,
      imgMob: '../../../assets/products/mob/Realme.png',
      imgTab: '../../../assets/products/tab/Realme.png',
      imgDesk: '../../../assets/products/desk/Realme.png',
    },
    {
      id: 8,
      imgMob: '../../../assets/products/mob/Techno.png',
      imgTab: '../../../assets/products/tab/Techno.png',
      imgDesk: '../../../assets/products/desk/Techno.png',
    },
    {
      id: 9,
      imgMob: '../../../assets/products/mob/Vivo.png',
      imgTab: '../../../assets/products/tab/Vivo.png',
      imgDesk: '../../../assets/products/desk/Vivo.png',
    },
    {
      id: 10,
      imgMob: '../../../assets/products/mob/Xiomi.png',
      imgTab: '../../../assets/products/tab/Xiomi.png',
      imgDesk: '../../../assets/products/desk/Xiomi.png',
    },
  ];
  private inventories: Inventory[] = [
    {
      title: 'Amazon P2P',
      imgMob: '../../../assets/products/mob/amazon.png',
      imgTab: '../../../assets/products/tab/amazon.png',
      imgDesk: '../../../assets/products/desk/amazon.png',
    },
    {
      title: 'Flipkart VRPs',
      imgMob: '../../../assets/products/mob/flipkart.png',
      imgTab: '../../../assets/products/tab/flipkart.png',
      imgDesk: '../../../assets/products/desk/flipkart.png',
    },
    {
      title: 'IQC Stock',
      imgMob: '../../../assets/products/mob/qc.png',
      imgTab: '../../../assets/products/tab/qc.png',
      imgDesk: '../../../assets/products/desk/qc.png',
    },
  ];
  private sparess: Spare[] = [
    {
      title: 'Top quality parts',
      desc: 'Rest assured that we only use and sell top-quality parts',
      imgMob: '../../../assets/products/mob/quality.png',
      imgTab: '../../../assets/products/tab/quality.png',
      imgDesk: '../../../assets/products/desk/quality.png',
    },
    {
      title: 'Everything you need',
      desc: 'Find all types of smartphone spare parts here',
      imgMob: '../../../assets/products/mob/need.png',
      imgTab: '../../../assets/products/tab/need.png',
      imgDesk: '../../../assets/products/desk/need.png',
    },
    {
      title: 'Cost saving',
      desc: 'Buying a single part is cheaper than buying a new product',
      imgMob: '../../../assets/products/mob/savings.png',
      imgTab: '../../../assets/products/tab/savings.png',
      imgDesk: '../../../assets/products/desk/savings.png',
    },
  ];
  private spareTypes: SpareType[] = [
    {
      id: 1,
      title: 'LCD screen',
      imgMob: '../../../assets/products/mob/__lcd.png',
      imgTab: '../../../assets/products/tab/__lcd.png',
      imgDesk: '../../../assets/products/desk/__lcd.png',
    },
    {
      id: 2,
      title: 'Battery',
      imgMob: '../../../assets/products/mob/__batr.png',
      imgTab: '../../../assets/products/tab/__batr.png',
      imgDesk: '../../../assets/products/desk/__batr.png',
    },
    {
      id: 3,
      title: 'Front camera',
      imgMob: '../../../assets/products/mob/__fC.png',
      imgTab: '../../../assets/products/tab/__fC.png',
      imgDesk: '../../../assets/products/desk/__fC.png',
    },
    {
      id: 4,
      title: 'Back camera',
      imgMob: '../../../assets/products/mob/__dC.png',
      imgTab: '../../../assets/products/tab/__dC.png',
      imgDesk: '../../../assets/products/desk/__dC.png',
    },
    {
      id: 5,
      title: 'Mic',
      imgMob: '../../../assets/products/mob/__mP.png',
      imgTab: '../../../assets/products/tab/__mP.png',
      imgDesk: '../../../assets/products/desk/__mP.png',
    },
    {
      id: 6,
      title: 'Receiver',
      imgMob: '../../../assets/products/mob/__reciev.png',
      imgTab: '../../../assets/products/tab/__reciev.png',
      imgDesk: '../../../assets/products/desk/__reciev.png',
    },
    {
      id: 7,
      title: 'Charging jack',
      imgMob: '../../../assets/products/mob/__mC.png',
      imgTab: '../../../assets/products/tab/__mC.png',
      imgDesk: '../../../assets/products/desk/__mC.png',
    },
    {
      id: 8,
      title: 'Speaker',
      imgMob: '../../../assets/products/mob/__sR.png',
      imgTab: '../../../assets/products/tab/__sR.png',
      imgDesk: '../../../assets/products/desk/__sR.png',
    },
    {
      id: 9,
      title: 'Back panel',
      imgMob: '../../../assets/products/mob/__bP.png',
      imgTab: '../../../assets/products/tab/__bP.png',
      imgDesk: '../../../assets/products/desk/__bP.png',
    },
    {
      id: 10,
      title: 'Sim Tray',
      imgMob: '../../../assets/products/mob/__sT.png',
      imgTab: '../../../assets/products/tab/__sT.png',
      imgDesk: '../../../assets/products/desk/__sT.png',
    },
    {
      id: 11,
      title: 'Volume Button',
      imgMob: '../../../assets/products/mob/__vB.png',
      imgTab: '../../../assets/products/tab/__vB.png',
      imgDesk: '../../../assets/products/desk/__vB.png',
    },
    {
      id: 12,
      title: 'AUX jack',
      imgMob: '../../../assets/products/mob/__aux.png',
      imgTab: '../../../assets/products/tab/__aux.png',
      imgDesk: '../../../assets/products/desk/__aux.png',
    },
  ];

  constructor() {}
  getHeads() {
    return this.heads.slice();
  }
  getTests() {
    return this.tests.slice();
  }
  getBrands() {
    return this.brands.slice();
  }
  getInventories() {
    return this.inventories.slice();
  }
  getSpares() {
    return this.sparess.slice();
  }
  getSpareTypes() {
    return this.spareTypes.slice();
  }
  prevSlide(currentSlide: number, slides: any[]) {
    return currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  }
  nextSlide(currentSlide: number, slides: any[]) {
    return currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  }
}
