import { Component, Input } from '@angular/core';
import { SpareType } from '../products.model';

@Component({
  selector: 'app-spare-types',
  templateUrl: './spare-types.component.html',
  styleUrls: ['./spare-types.component.scss']
})
export class SpareTypesComponent {
  @Input() spareTypes!: SpareType[];

}
