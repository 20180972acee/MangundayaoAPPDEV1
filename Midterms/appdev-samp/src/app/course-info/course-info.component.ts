import { Component, OnInit } from '@angular/core';

export interface Student{
  idNumber: string;
  name: string;
  dateAdded: Date;
  course: string;
}

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})

export class CourseInfoComponent implements OnInit {
  
  instructor= 'Erna-krisiti Martinez';
  courseCode='APPDEV 1';
  courseDesc='Introduction to Application Development';

  student: Student = {
    idNumber: ' 201012345321',
    name: 'Susan',
    dateAdded: new Date(2022,1,19),
    course: 'BSIT',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
