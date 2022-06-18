import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  messageToChild:string|null =null;
  objectToChild:any = {};
  message:string|null = null;
  constructor() { }

  ngOnInit(): void {
  }

  SendClick(){
    this.messageToChild = 'Hello ! from parent';
    this.objectToChild = {
      'Name': 'TV',
      'Price': 45500.33
    }
  }
  SendToParent(e:any) {
    this.message = e;
  }
  Name:string = '';
  Price:number = 0;
  SendObject(e:any) {
     this.Name = e.Name;
     this.Price = e.Price;
  }

}
