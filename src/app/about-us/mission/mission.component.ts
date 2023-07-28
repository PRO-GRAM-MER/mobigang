import { Component, Input } from '@angular/core';
import { Mission } from '../aboutUs.model';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent {
  @Input() missions!: Mission[];
  constructor() {}
  ngOnInit(): void {
    console.log(this.missions)
  }


}
