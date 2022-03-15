import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  students=[{value:'John Uno'},
  {value:'John Uno'},
  {value:'James Dos'},
  {value:'Anna Banana'},
  {value:'Donna Sana'},
  {value:'Arla Che'},
  {value:'Vince Ent'},];



  constructor() { }

  ngOnInit(): void {
  }

}
