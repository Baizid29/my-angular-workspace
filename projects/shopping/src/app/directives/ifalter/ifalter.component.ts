import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifalter',
  templateUrl: './ifalter.component.html',
  styleUrls: ['./ifalter.component.css']
})
export class IfalterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product:any = {
    Name : 'Nike Casuals',
    Preview : 'assets/nike shoe.jpg',
    Description : 'something about nike casuals'
  }
  btnText:string = 'Description';
  togglePreview = true;

  PreviewClick(){
    this.togglePreview = (this.togglePreview==true)?false:true;
    this.btnText = (this.btnText=='Description')?'Preview':'Description';
  }
}
