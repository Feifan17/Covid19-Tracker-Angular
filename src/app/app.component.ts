import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './services/data.service';
import { countryData } from './models/countryData.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  isLoading: boolean = true;
  countriesData: countryData[] = [];
  selectedData: countryData;
  countries: String[] = [];
  countriesDataSub: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getSummaryData();
    this.countriesDataSub = this.dataService.getCountriesDataObs().subscribe(res => {
      this.countriesData = res;
      this.countries = res.map(country => country.country);
      this.selectedData = this.countriesData[0];
      this.isLoading = false;
    })
  }

  ngOnDestroy(): void {
    this.countriesDataSub.unsubscribe();
  }

  onCountryChange(selectedCountry: String): void {
    this.selectedData = this.countriesData.find(country => country.country === selectedCountry);
  }



}
