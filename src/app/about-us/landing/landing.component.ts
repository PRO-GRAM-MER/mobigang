import { Component, OnInit, Input } from '@angular/core';
import { heading } from '../aboutUs.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  @Input() headings!: heading[];

  constructor(
  ) {}
  ngOnInit(): void {
    console.log(this.headings)
  }
}
