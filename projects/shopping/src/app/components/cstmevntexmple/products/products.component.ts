import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any[] = [];

  allCount:number = 0;
  electronicsCount:number = 0;
  jeweleryCount:number = 0;
  mensCount:number = 0;
  womensCount:number = 0;

  GetProducts(){
    fetch('http://fakestoreapi.com/products')
    .then(response=> response.json())
    .then(data=>{
        this.products = data;
        this.allCount = data.length;
        this.electronicsCount = data.filter((product:any)=> product.category=='electronics').length;
        this.jeweleryCount = data.filter((product:any)=> product.category=='jewelery').length;
        this.mensCount = data.filter((product:any)=> product.category==`men's clothing`).length;
        this.womensCount = data.filter((product:any)=>product.category==`women's clothing`).length;
       
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

  categoryName:string = 'all';
  GetCategoryName(e:any){
     this.categoryName = e;
     if(this.categoryName=='all') {
         this.GetProducts();
     } else {
      fetch(`http://fakestoreapi.com/products/category/${this.categoryName}`)
      .then(response=>response.json())
      .then(data=>{
        this.products = data;
      })
     }
  }

}
