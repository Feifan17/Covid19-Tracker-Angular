import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() countries: String[] = [];
  @Input() selected: String = "";
  @Output() selectedChange: EventEmitter<String> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {

  }

  countryChange(): void {
    this.selectedChange.emit(this.selected);
  }
  

  

}
