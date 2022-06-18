import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cntprojection',
  templateUrl: './cntprojection.component.html',
  styleUrls: ['./cntprojection.component.css']
})
export class CntprojectionComponent implements OnInit {
  product:any = {};

  GetData(id:number) {
     fetch(`http://fakestoreapi.com/products/${id}`)
     .then(response=>response.json())
     .then(data => {
       this.product = data;
     })
  }
  count:number = 1;
  ButtonText:string = 'Price | Rating';
  ToggleTemplate:TemplateRef<any>|null = null;

  @ViewChild('DescriptionTemplate', {static: true}) DescriptionTemplate:TemplateRef<any>|null = null;
  @ViewChild('RatingTemplate', {static:true}) RatingTemplate:TemplateRef<any>|null = null;

  constructor() { }

  ngOnInit(): void {
    this.GetData(this.count);
    this.ToggleTemplate = this.DescriptionTemplate;
  }
  NextClick(){
    this.count++;
    this.GetData(this.count);
  }
  PreviousClick(){
    this.count--;
    this.GetData(this.count);
  }
  ToggleDetails(){
    this.ToggleTemplate = (this.ToggleTemplate==this.DescriptionTemplate)?this.RatingTemplate: this.DescriptionTemplate;
    this.ButtonText = (this.ButtonText=='Price | Rating')?'Description':'Price | Rating';
  }
 
}
