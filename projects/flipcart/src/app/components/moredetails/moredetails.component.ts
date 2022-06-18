import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakestoreService } from '../../services/fakestore.service';

@Component({
  selector: 'app-moredetails',
  templateUrl: './moredetails.component.html',
  styleUrls: ['./moredetails.component.css']
})
export class MoredetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private fakestore: FakestoreService) { }

  productid:string | null = null;
  product:any = {};
  ngOnInit(): void {
    this.productid = this.route.snapshot.paramMap.get('productid');
    this.fakestore.GetProducts().subscribe(data=> {
       this.product = data.find(product=> product.id==this.productid);
    })
  }

}
