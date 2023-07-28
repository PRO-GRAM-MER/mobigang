import { Component, Input } from '@angular/core';
import { Value } from '../home.model';


@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss'],
})
export class ValuesComponent {
  @Input() values!: Value[];
  constructor(
  ) {}

  ngOnInit(): void {
  }
}
