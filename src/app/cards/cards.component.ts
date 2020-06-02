import { Component, OnInit, Input } from '@angular/core';
import { countryData } from '../models/countryData.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() countryData: countryData;

  constructor() { }

  ngOnInit(): void {
    console.log(this.countryData);
  }

}
