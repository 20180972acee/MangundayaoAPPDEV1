import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Choco } from '../choco';
import{ CHOCOLATE } from '../choco-listing';

@Component({
  selector: 'app-contact-seller',
  templateUrl: './contact-seller.component.html',
  styleUrls: ['./contact-seller.component.css']
})
export class ContactSellerComponent implements OnInit {
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
