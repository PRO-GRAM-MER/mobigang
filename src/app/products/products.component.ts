import { Component, OnInit, HostListener, ViewChildren, QueryList } from '@angular/core';
import { Brand, Head, Inventory, Spare, SpareType, Test } from './products.model';
import { ProductsService } from './products.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  heads!: Head[];
  tests!: Test[];
  brands!: Brand[];
  inventories!: Inventory[];
  spareParts!: Spare[];
  spareTypes!: SpareType[];
  @ViewChildren('section')
  sections!: QueryList<any>;

  constructor(private router: Router, private route: ActivatedRoute, private productsService: ProductsService) {}

  ngOnInit(): void {
    this.heads = this.productsService.getHeads();
    this.tests = this.productsService.getTests();
    this.brands = this.productsService.getBrands();
    this.inventories = this.productsService.getInventories();
    this.spareParts = this.productsService.getSpares();
    this.spareTypes = this.productsService.getSpareTypes();
    this.setImageUrls(window.innerWidth);
  }

  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fragment = this.route.snapshot.fragment;
        if (fragment) {
          const section = this.sections.find(s => s.nativeElement.id === fragment);
          if (section) {
            section.nativeElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    this.setImageUrls(event.target.innerWidth);
  }
  setImageUrls(width: number) {
    this.heads.forEach((head) => {
      head.imgUrl = this.getImageUrl(
        width,
        head.imgMob,
        head.imgTab,
        head.imgDesk
      );
    });
    this.tests.forEach((test) => {
      test.imgUrl = this.getImageUrl(
        width,
        test.imgMob,
        test.imgTab,
        test.imgDesk
      );
    });
    this.brands.forEach((brand) => {
      brand.imgUrl = this.getImageUrl(
        width,
        brand.imgMob,
        brand.imgTab,
        brand.imgDesk
      );
    });
    this.inventories.forEach((inventory) => {
      inventory.imgUrl = this.getImageUrl(
        width,
        inventory.imgMob,
        inventory.imgTab,
        inventory.imgDesk
      );
    });
    this.spareParts.forEach((sparePart) => {
      sparePart.imgUrl = this.getImageUrl(
        width,
        sparePart.imgMob,
        sparePart.imgTab,
        sparePart.imgDesk
      );
    });
    this.spareTypes.forEach((SpareType) => {
      SpareType.imgUrl = this.getImageUrl(
        width,
        SpareType.imgMob,
        SpareType.imgTab,
        SpareType.imgDesk
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
