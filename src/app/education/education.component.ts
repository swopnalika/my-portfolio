import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Utkal University",
      course: 'MCA',
      duration: '2018-2021',
      score: '8.47 CGPA',
    },
    {
      institute: 'BJB(A)college',
      course: 'Bachelor in science',
      duration: '2015-2018',
      score: '8.04 CGPA',
    },
    {
      institute: 'BJB junior college',
      course: 'Intermediate',
      duration: '2013-2015',
      score: '78.17%',
    },
    {
      institute: 'Stewart School',
      course: 'Matriculation',
      duration: '2012-2013',
      score: '92.17%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
