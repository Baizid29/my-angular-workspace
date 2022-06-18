import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frminptstatevalid',
  templateUrl: './frminptstatevalid.component.html',
  styleUrls: ['./frminptstatevalid.component.css']
})
export class FrminptstatevalidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  FormSubmit(obj:any){
    alert(JSON.stringify(obj));
  }

}
