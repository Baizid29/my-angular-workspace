import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twodatabinding',
  templateUrl: './twodatabinding.component.html',
  styles: [
  ]
})
export class TwodatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ProductName:string = 'Samsung TV';
  Stock:boolean = true;
  City:string = 'Delhi';

}
