import { Component, Input, OnInit } from '@angular/core';
import { Partner } from '../aboutUs.model';

@Component({
  selector: 'app-partner-slide',
  templateUrl: './partner-slide.component.html',
  styleUrls: ['./partner-slide.component.scss'],
})
export class PartnerSlideComponent implements OnInit {
  @Input() partners!: Partner[];

  constructor() {}
  ngOnInit() {}
}
