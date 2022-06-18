import { Component, OnInit } from '@angular/core';
// import { table } from 'console';

@Component({
  selector: 'app-onedatabinding',
  templateUrl: './onedatabinding.component.html',
  styles: [
  ]
})
export class OnedatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  product:any={
    Name:'Samsung Tv',
    Price:50000,
    Stock:false
  }
  tableHeight:number = 100;
  tableWidth:number = 500;
  tableBorder:number =1;

}
