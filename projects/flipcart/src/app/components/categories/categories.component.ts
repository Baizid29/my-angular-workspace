import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FakestoreService } from '../../services/fakestore.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:any[] = [];
  userid:any;
  constructor(private fakestore: FakestoreService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
     this.fakestore.GetCategories().subscribe(data=> this.categories=data);
     this.userid = this.cookie.get('userid');
  }
  SignoutClick() {
    this.cookie.delete('userid');
    this.router.navigate(['/login']);
  }

}
