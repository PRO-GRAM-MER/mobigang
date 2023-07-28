import { Component, Input } from '@angular/core';
import { Inventory } from '../products.model';

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.scss']
})
export class InventoriesComponent {
  @Input() inventories!: Inventory[];

}
