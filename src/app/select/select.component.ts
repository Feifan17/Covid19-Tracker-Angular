import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { countryData } from '../models/countryData.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit, OnDestroy {

  countries: String[];
  countriesData: countryData[];
  countriesDataSub: Subscription;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getSummaryData();
    this.countriesDataSub = this.dataService.getCountriesDataObs().subscribe(res => {
      this.countries = res.map(country => country.country);
    });
  }

  ngOnDestroy(): void {
    this.countriesDataSub.unsubscribe();
  }

}
