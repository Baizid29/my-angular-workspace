import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  messageToChild:string|null =null;
  objectToChild:any = {};
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


}
