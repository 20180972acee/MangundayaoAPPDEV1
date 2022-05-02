import { Component, OnInit } from '@angular/core';
import { Choco } from '../choco';
import { CHOCOLATE } from '../choco-listing';



@Component({
  selector: 'app-view-lists',
  templateUrl: './view-lists.component.html',
  styleUrls: ['./view-lists.component.css']
})
export class ViewListsComponent implements OnInit {
  choco: Choco[]=[];
  constructor(){}



    ngOnInit(): void {
      this.choco = CHOCOLATE;
    }

}