import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  location:any;
  constructor() { }

  ngOnInit(): void {
    this.location = location.pathname;
  }

}
