import { Component, OnInit, Input } from '@angular/core';
import { Vision } from '../aboutUs.model';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss'],
})
export class VisionComponent implements OnInit {
  @Input() visions!: Vision[];
  constructor() {}
  ngOnInit(): void {
    console.log(this.visions);
  }
}
