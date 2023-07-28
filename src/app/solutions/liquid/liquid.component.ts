import { Component, Input } from '@angular/core';
import { Liquid } from '../solutions.model';

@Component({
  selector: 'app-liquid',
  templateUrl: './liquid.component.html',
  styleUrls: ['./liquid.component.scss']
})
export class LiquidComponent {
  @Input() liquids!: Liquid[];

}
