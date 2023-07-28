import { Component, Input } from '@angular/core';
import { Brand } from '../products.model';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  @Input() brands!: Brand[];

}
