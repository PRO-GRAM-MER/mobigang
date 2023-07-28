import { Component, Input, OnInit } from '@angular/core';
import { Achievement } from '../home.model';


@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit{
  @Input() achievements! : Achievement[];
constructor() {}

ngOnInit(): void {
  
}


}
