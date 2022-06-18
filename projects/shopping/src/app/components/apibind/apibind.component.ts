import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apibind',
  templateUrl: './apibind.component.html',
  styleUrls: ['./apibind.component.css']
})
export class ApibindComponent implements OnInit {

  product:any = {};
  productId:number = 1;

  constructor() { }

  ngOnInit(): void {
    fetch(`http://fakestoreapi.com/products/${this.productId}`)
    .then(response=> response.json())
    .then(data=> {
       this.product = data;
    })
  }

}
