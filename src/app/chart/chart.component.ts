import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { countryData } from '../models/countryData.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {

  @Input() countryData: countryData;

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Confirmed', 'Recovered', 'Deaths'];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];
  barChartColors: Color[] = [{backgroundColor: ["#ffd31d", "#79d70f", "#d92027"]}]

  barChartData: ChartDataSets[];


  constructor() { }

  ngOnInit(): void {
    this.barChartData = [
      { data: [this.countryData.totalConfirmed, this.countryData.totalRecovered, this.countryData.totalDeaths] }
    ];
  }

  ngOnChanges(): void {
    this.barChartData = [
      { data: [this.countryData.totalConfirmed, this.countryData.totalRecovered, this.countryData.totalDeaths] }
    ];
  }

}
