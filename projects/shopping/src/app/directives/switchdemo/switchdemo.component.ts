import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdemo',
  templateUrl: './switchdemo.component.html',
  styleUrls: ['./switchdemo.component.css']
})
export class SwitchdemoComponent implements OnInit {

  product:any = {};
  GetData(productid:number) {
    fetch(`http://fakestoreapi.com/products/${productid}`)
    .then(response=> response.json())
    .then(data=> {
       this.product = data;
    })
  }
  TemplateToDisplay:string = 'basic';

  constructor() { }

  ngOnInit(): void {
    this.GetData(2);
  }

  ChangeTemplate(e:any){
    this.TemplateToDisplay = e.target.name;
  }

}

