import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() AllCount:number = 0;
  @Input() ElectronicsCount:number = 0;
  @Input() JeweleryCount:number = 0;
  @Input() MensClothingCount:number = 0;
  @Input() WomensClothingCount:number = 0;


  @Output() FilterChanged:EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  FilterButtonClick(e:any){
    this.FilterChanged.emit(e.target.name);
 }

}
