import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'ROCS PLAN 2.0',
      technologies: 'Angular, Springboot, MySQL',
      description: [
        'Responsible for designing and development of a single-page application using Angular, TypeScript, SCSS',
        'Implemented UI/UX design, wireframes, and microservices in the modernized ROCS Plan in an Agile environment.',
        'Worked on building reusable services/components and Angularlibrary.',
        'Learned how to generate PDF, Excel files using PDFmake and ExcelJs library.',
        'Written test cases/done refactoring and code review forthe components to optimize the performance.',
        'Worked extensively in using version control like Git.',
        'Reduced error statistics by developing efficient unit and integration test cases using Jasmine, Karma enhanced the coding efficiency by maintaining a code coverage of 90 and above.',
        'Worked on a highly interactive web application in an agile environment.',
        'Maintained code quality by regular analysis using SonarQube and ESLint.',
        'Presented project prototypes innovative ideas and enhanced applications, winning praise from colleagues and clients,'
      ],
    },
    {
      title: 'StudenthubUSA',
      technologies: 'Angular material,Springboot',
      description: [
        'Responsible for designing wireframe and creating a responsive single-page application using HTML, CSS, JS.',
        'Working experience in Angular Material UI and Bootstrap.',
        'Good understanding of DOM (Document Object Model).',
        'Manual API testing using Postman.',
        'Consumed the REST API in Angular HTTP services to bind data.'
      ],
    },
 
  ];
  constructor() {}

  ngOnInit(): void {}
}
