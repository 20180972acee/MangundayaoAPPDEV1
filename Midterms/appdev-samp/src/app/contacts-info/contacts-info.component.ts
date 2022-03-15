import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-info',
  templateUrl: './contacts-info.component.html',
  styleUrls: ['./contacts-info.component.css']
})
export class ContactsInfoComponent implements OnInit {
  instuctor='Erna-kristi Martinez';
  courseCode='APPDEV1';
  courseDesc='Introduction to Application Development';

  
  constructor() { }

  ngOnInit(): void {
  }

}
