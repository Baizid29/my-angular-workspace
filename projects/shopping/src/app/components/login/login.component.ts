import { Component } from '@angular/core';
import { CaptchaService } from '../../service/captcha.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public code;
  constructor(private captcha: CaptchaService) {
  this.code = captcha.GenerateCode();
  }
  public title = 'User Login';
  public NewCode() {
  this.code = this.captcha.GenerateCode();
  }

}
