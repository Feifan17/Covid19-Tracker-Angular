import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  countries: String[];
  countriesSub: Subscription;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCountryList();
    this.countriesSub = this.dataService.getCountriesObs().subscribe(countryList => {
      this.countries = countryList;
    })
  }

}
