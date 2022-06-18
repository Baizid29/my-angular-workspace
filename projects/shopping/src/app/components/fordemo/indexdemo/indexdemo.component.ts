import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indexdemo',
  templateUrl: './indexdemo.component.html',
  styleUrls: ['./indexdemo.component.css']
})
export class IndexdemoComponent implements OnInit {

  products:any[] = [];
  productName:string = '';
  productPrice:number = 0;
  product:any = {};

  constructor() { }

  ngOnInit(): void {
  }

  RegisterClick(){
     this.product = {
        Name: this.productName,
        Price: this.productPrice
     }
     this.products.push(this.product);
     alert('Product Registered..');
     this.productName = '';
     this.productPrice = 0;
  }
  DeleteClick(index:number){
      let flag = confirm('Are you sure, want to Delete?');
      if(flag==true) {
        this.products.splice(index,1);
      }
  }

}
