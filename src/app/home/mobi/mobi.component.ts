import { Component, Input } from '@angular/core';
import { Reason } from '../home.model';


@Component({
  selector: 'app-mobi',
  templateUrl: './mobi.component.html',
  styleUrls: ['./mobi.component.scss']
})
export class MobiComponent {
  @Input() reasons!: Reason[];

}
