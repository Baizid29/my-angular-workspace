import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { IUser } from '../../contracts/IUser';
import { UsersdataService } from '../../services/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersdata: UsersdataService, private router: Router, private cookie: CookieService) { }

  Users:IUser[] = [];
  LoginUser:any;
  ngOnInit(): void {
    this.usersdata.GetUsers().subscribe(user=> this.Users= user);
  }
  LoginClick(obj:any){
     this.LoginUser = this.Users.find(user=> user.UserId==obj.UserId);
     if(this.LoginUser.UserId==obj.UserId && this.LoginUser.Password==obj.Password)
     {
       this.cookie.set('userid', obj.UserId);
       this.router.navigate(['/categories']);
     } else {
       this.router.navigate(['/invalidlogin']);
     }
  }

}
