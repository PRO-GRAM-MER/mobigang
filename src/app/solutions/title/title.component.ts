import { Component, Input } from '@angular/core';
import { Title } from '../solutions.model';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() titles!: Title[];

}
