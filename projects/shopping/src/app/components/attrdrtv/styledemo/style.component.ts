import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  styleObject = {
    'position': 'fixed',
    'top': '',
    'left': ''
  }
  MouseMove(event:any) {
     console.log(`X=${event.clientX}\nY=${event.clientY}`);
     this.styleObject = {
       'position' : 'fixed',
       'top': event.clientY + 'px',
       'left': event.clientX + 'px'
     }
  }
}

