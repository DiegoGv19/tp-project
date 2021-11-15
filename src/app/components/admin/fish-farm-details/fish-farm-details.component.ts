import { Component, OnInit } from '@angular/core';

type Devices = {
  title: string;
  sensors: {
    isActive: boolean;
    imageSrc: string;
    title: string;
  }[];
}[];

@Component({
  selector: 'app-fish-farm-details',
  templateUrl: './fish-farm-details.component.html',
  styleUrls: ['./fish-farm-details.component.scss'],
})
export class FishFarmDetailsComponent implements OnInit {
  constructor() {}

  deviceData: Devices = [
    {
      title: 'Sensores de temperatura',
      sensors: [
        {
          isActive: true,
          imageSrc: 'assets/image-frame.png',
          title: 'Device X',
        },
        {
          isActive: true,
          imageSrc: 'assets/image-frame.png',
          title: 'Device Y',
        },
      ],
    },
    {
      title: 'Sensores de pH',
      sensors: [
        {
          isActive: true,
          imageSrc: 'assets/image-frame.png',
          title: 'Device X',
        },
      ],
    },
    {
      title: 'Sensores de oxígeno disuelto',
      sensors: [
        {
          isActive: false,
          imageSrc: 'assets/image-frame.png',
          title: 'Device X',
        },
        {
          isActive: true,
          imageSrc: 'assets/image-frame.png',
          title: 'Device Y',
        },
      ],
    },
    {
      title: 'Compuertas',
      sensors: [
        {
          isActive: true,
          imageSrc: 'assets/image-frame.png',
          title: 'Device X',
        },
      ],
    },
  ];

  ngOnInit(): void {}
}
