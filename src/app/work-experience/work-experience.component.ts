import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Senior Systems Engineer',
      company: 'Infosys Limited',
      duration: 'Aug 2021 - Now',
      description: [
        'Modernization of an existing application with Angular and Springboot for one of the biggestretailers - FedEx|TNT, capable of monitoring end-to-end shipment details'
      ],
    },
    {
      role: 'Associate developer',
      company: 'Atgenx',
      duration: 'Jan 2021 - July 2021',
      description: [
        ' Worked as an intern and got exposure to work on client applications like StudenthubUSA, Encuentrolive with MEAN stack technology',
      ],
    }
  
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
