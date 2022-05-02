import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute} from '@angular/router';
import { Choco } from '../choco';
import { CHOCOLATE } from '../choco-listing';


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
Choco = CHOCOLATE;
selectedChoco?: Choco;

  constructor(
    private route: ActivatedRoute,
  ) { }



  ngOnInit(): void {

    const id=this.route.snapshot.paramMap.get('id');
    this.selectedChoco = CHOCOLATE.find(selectedChoco => selectedChoco.id === id);
  }

}