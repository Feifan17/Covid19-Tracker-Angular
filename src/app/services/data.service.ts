import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

    private countries: String[] = [];
    private countriesObs = new Subject<String[]>();
    
    constructor(private http: HttpClient) { }


    getCountryList() {
        this.http.get<{countries: String[]}>('http://localhost:3000/countries')
        .subscribe(res => {
            this.countries = res.countries;
            this.countriesObs.next([...this.countries]);
        })
    }

    getCountriesObs() {
        return this.countriesObs.asObservable();
    }



}