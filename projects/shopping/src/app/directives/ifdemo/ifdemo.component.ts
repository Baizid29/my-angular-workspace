import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.css']
})
export class IfdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product:any={
    Name : 'Nike Casuals',
    Price : 5000,
    Preview : 'assets/nike shoe.jpg'
  }

}
