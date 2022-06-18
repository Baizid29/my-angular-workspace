import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrls: ['./fordemo.component.css']
})
export class FordemoComponent implements OnInit {

  categories:any[] = [];

  GetCategories(){
     fetch('http://fakestoreapi.com/products/categories')
     .then(response=> response.json())
     .then(data=> {
        data.unshift("all")
        this.categories = data;
     })
  }

  constructor() { }

  ngOnInit(): void {
    this.GetCategories();
  }

}
