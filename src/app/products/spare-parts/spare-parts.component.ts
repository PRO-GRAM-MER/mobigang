import { Component, Input } from '@angular/core';
import { Spare } from '../products.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-spare-parts',
  templateUrl: './spare-parts.component.html',
  styleUrls: ['./spare-parts.component.scss']
})
export class SparePartsComponent {
  @Input() spareParts!: Spare[];
  selectedIndex: number = 0;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}

  selectedSlide(index: number) {
    this.selectedIndex = index;
  }
  onPrev() {
    this.selectedIndex = this.productsService.prevSlide(this.selectedIndex, this.spareParts)
  }
  onNext() {
    this.selectedIndex = this.productsService.nextSlide(this.selectedIndex, this.spareParts)
  }

}
