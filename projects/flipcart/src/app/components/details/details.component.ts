import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakestoreService } from '../../services/fakestore.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  
  product:any = {};
  productId:string|null = null;
  
  constructor(private fakestore:FakestoreService, private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.productId = this.route.snapshot.paramMap.get('id');
     this.fakestore.GetProducts().subscribe(data=>{
       this.product = data.find(product=> product.id==this.productId);
     })
  }

}
