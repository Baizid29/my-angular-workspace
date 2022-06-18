import { Component, OnInit } from '@angular/core';
import { FakestoreapiService } from '../../service/fakestoreapi.service';

@Component({
  selector: 'app-fakestoreapi',
  templateUrl: './fakestoreapi.component.html',
  styleUrls: ['./fakestoreapi.component.css']
})
export class FakestoreapiComponent implements OnInit {

  constructor(private fakestore: FakestoreapiService) { }

  categories:string[] = [];
  products:any[] = [];

  ngOnInit(): void {
    this.fakestore.GetCategories().subscribe(category=> this.categories = category );
    this.fakestore.GetProducts().subscribe(product=> this.products = product);
  }

}
