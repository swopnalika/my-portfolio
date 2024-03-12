import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Expert',
      rating: 85,
    },
    
    {
      name: 'HTML, CSS, TS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'Springboot',
      level: 'Intermidiate',
      rating: 60,
    },
    {
      name: 'JAVA',
      level: 'Intermidiate',
      rating: 60,
    },
    {
      name: 'Git',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'Ionic',
      level: 'Beginner',
      rating: 50,
    },
   
  ];
  constructor() {}

  ngOnInit(): void {}
}
