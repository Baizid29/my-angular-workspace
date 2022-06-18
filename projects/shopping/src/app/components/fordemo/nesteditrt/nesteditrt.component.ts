import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nesteditrt',
  templateUrl: './nesteditrt.component.html',
  styleUrls: ['./nesteditrt.component.css']
})
export class NesteditrtComponent implements OnInit {

  MarsObject:any = {};

  GetMarsPhotos(){
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&#39;')
    .then(response=> response.json())
    .then(data=> {
        this.MarsObject = data;
    })
  }
 
  constructor() { }

  ngOnInit(): void {
    this.GetMarsPhotos();
  }

}
