import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Test } from '../products.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.scss'],
})
export class InspectionComponent implements OnInit {
  @Input() tests!: Test[];
  selectedIndex: number = 0;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}

  selectedSlide(index: number) {
    this.selectedIndex = index;
  }
  onPrev() {
    this.selectedIndex = this.productsService.prevSlide(this.selectedIndex, this.tests)
  }
  onNext() {
    this.selectedIndex = this.productsService.nextSlide(this.selectedIndex, this.tests)
  }

}
