import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesdemo',
  templateUrl: './pipesdemo.component.html',
  styleUrls: ['./pipesdemo.component.css']
})
export class PipesdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cities:any[] = ['Delhi','Chennai', 'Hyd', 'Mumbai', 'Bangalore', 'Goa'];

}
