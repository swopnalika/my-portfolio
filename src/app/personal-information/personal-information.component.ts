import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Swopnalika Mohapatra'],
    ['DOB', '27/10/1997'],
    ['Work Exp', '3 Years'],
    ['Education', 'MCA (2021)'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with around 3 years of experience in IT industry.',
    'Currently working as frontend developer in Infosys.',
    'Working with a leading logistics company since last 2years',
    'Knowledge of building product from scratch to market ready.',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
    
  ];

  constructor() {}

  ngOnInit(): void {}
}
