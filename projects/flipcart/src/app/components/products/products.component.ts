import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakestoreService } from '../../services/fakestore.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any[] = [];
  categoryName:string|null = null;
  constructor(private fakestore: FakestoreService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.categoryName = this.route.snapshot.paramMap.get('category');
    this.fakestore.GetProducts().subscribe(data => {
        this.products = data.filter(product=> product.category==this.categoryName);
      
    })
  }

}
