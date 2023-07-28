import { Component, Input } from '@angular/core';
import { Decision } from '../solutions.model';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.scss']
})
export class DecisionComponent {
 @Input() decisions!: Decision[];

}
