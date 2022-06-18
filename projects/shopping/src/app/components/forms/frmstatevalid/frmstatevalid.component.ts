import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frmstatevalid',
  templateUrl: './frmstatevalid.component.html',
  styleUrls: ['./frmstatevalid.component.css']
})
export class FrmstatevalidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  FormSubmit(obj:any){
    alert(JSON.stringify(obj));
  }

}
