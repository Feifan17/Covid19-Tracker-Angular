import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  totalInfected: number;
  totalRecovered: number;
  totalDeaths: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCountriesDataObs().subscribe(res => {
      this.totalInfected = res[0].totalConfirmed;
      this.totalRecovered = res[0].totalRecovered;
      this.totalDeaths = res[0].totalDeaths;
    })
  }

}
