import { Component, Input } from '@angular/core';
import { Optimize } from '../solutions.model';

@Component({
  selector: 'app-optimize',
  templateUrl: './optimize.component.html',
  styleUrls: ['./optimize.component.scss']
})
export class OptimizeComponent {
  @Input() optimizations!: Optimize[];

}
