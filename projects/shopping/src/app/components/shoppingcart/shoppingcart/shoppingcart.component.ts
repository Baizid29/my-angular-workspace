import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  categories:string[] = [];

  GetCategories(){
     fetch('http://fakestoreapi.com/products/categories')
     .then(response=> response.json())
     .then(data=> {
       data.unshift("all");
       this.categories = data;
     })
  }

  products:any[] = [];

  GetProducts(){
     fetch('http://fakestoreapi.com/products')
     .then(response=> response.json())
     .then(data=> {
       this.products = data;
     })
  }

  constructor() { }

  ngOnInit(): void {
     this.GetCategories();
     this.GetProducts();
  }

  CategoryChanged(e:any){
     if(e.target.value=='all') {
        this.GetProducts();
     } else {
      fetch(`http://fakestoreapi.com/products/category/${e.target.value}`)
      .then(response=> response.json())
      .then(data=> {
        this.products = data;
      })
     }
  }
  CartItems:any[] = [];

  AddToCartClick(product:any){
    this.CartItems.push(product);
    alert(`${product.title}\nAdded to Cart`);
    this.GetCartItemsCount();
  }
  count:number = 0;
  GetCartItemsCount(){
    this.count = this.CartItems.length;
  }
  toggleCart:boolean = false;
  Toggle(){
    this.toggleCart=(this.toggleCart==false)?true:false
  }

}
