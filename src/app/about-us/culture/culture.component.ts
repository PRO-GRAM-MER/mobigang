import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Culture } from '../aboutUs.model';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss']
})
export class CultureComponent implements OnInit{
  @Input() cultures!: Culture[];
  constructor() {}
  ngOnInit(): void {
  }
}
