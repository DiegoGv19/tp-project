import { Component, OnInit } from '@angular/core';
import { FishFarm } from './fish-farm';
@Component({
  selector: 'app-display-fish-farms',
  templateUrl: './display-fish-farms.component.html',
  styleUrls: ['./display-fish-farms.component.scss']
})
export class DisplayFishFarmsComponent implements OnInit {

  farmList: FishFarm[] = [
    {
      date: "2018-09-09",
      name: "Granja"
    },
    {
      date: "2018-09-09",
      name: "Granja"
    },
    {
      date: "2018-09-09",
      name: "Granja"
    },
    {
      date: "2018-09-09",
      name: "Granja"
    },
  ]

  constructor() {


  }

  ngOnInit(): void {

  }

}
