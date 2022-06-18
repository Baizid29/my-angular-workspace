import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IUser } from '../../contracts/IUser';
import { UsersdataService } from '../../services/userdata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Users:IUser[] = [];

  constructor(private usersdata: UsersdataService, private router: Router) { }

  ngOnInit(): void {
    this.usersdata.GetUsers().subscribe(user=> this.Users=user);
  }
  RegisterClick(user:IUser) {
     this.usersdata.PostUser(user).subscribe();
     alert('Registerd Successfully');
     this.router.navigate(['/login']);
  }
  UserError:string = '';
  ErrorClass:string = '';
  VerifyUser(e:any){
     for(var user of this.Users)
     {
        if(user.UserId==e.target.value){
           this.UserError = 'User Id Taken - Try Another';
           this.ErrorClass = 'text-danger';
           break;
        } else {
          this.UserError = 'User Id Available';
          this.ErrorClass = 'text-success';
        }
     }
  }

}
