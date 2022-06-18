import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.css']
})
export class EventdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users:any[] = [
    {UserName: 'john'},
    {UserName: 'john12'},
    {UserName: 'john_nit'},
    {UserName: 'david'}
  ];
  statusMessage:string = '';
  isNameAvailable:boolean = true;
  VerifyUser(e:any){
     for(var user of this.users) {
         if(user.UserName==e.target.value){
            this.statusMessage = 'User Name Taken - Try Another';
            this.isNameAvailable = false;
            break;
         } else {
            this.statusMessage = 'User Name Available';
            this.isNameAvailable = true;
         }
     }
  }
  showCapsError:boolean = false;
  VerifyPassword(e:any){
      if(e.keyCode>=65 && e.keyCode<=90) {
         this.showCapsError = true;
      } else {
        this.showCapsError = false;
      }
  }

}
