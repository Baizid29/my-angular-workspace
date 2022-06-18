import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cstmvalidfrm',
  templateUrl: './cstmvalidfrm.component.html',
  styleUrls: ['./cstmvalidfrm.component.css']
})
export class CstmvalidfrmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  FormSubmit(obj:any){
    alert(JSON.stringify(obj));
  }
  isCityInValid:boolean = true;
  CityChanged(e:any){
      if(e.target.value=='-1'){
        this.isCityInValid = true;
      } else {
        this.isCityInValid = false;
      }
  }
  isEvenInvalid:boolean = true;
  VerifyEven(e:any){
       if(parseInt(e.target.value)%2==0){
          this.isEvenInvalid = false;
       } else {
         this.isEvenInvalid = true;
       }
  }

}
