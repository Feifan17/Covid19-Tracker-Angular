import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { countryData } from '../models/countryData.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {

    private countriesData: countryData[] = [];
    private countriesDataObs = new Subject<countryData[]>();
    
    constructor(private http: HttpClient) { }

    getSummaryData(): void {
        this.http.get<{countries: countryData[]}>('http://localhost:3000/summary')
        .subscribe(res => {
            this.countriesData = res.countries;
            this.countriesDataObs.next([...this.countriesData]);
        });
    }

    getCountriesDataObs() {
        return this.countriesDataObs.asObservable();
    }



}