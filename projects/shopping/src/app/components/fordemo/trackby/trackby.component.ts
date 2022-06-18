import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackby',
  templateUrl: './trackby.component.html',
  styleUrls: ['./trackby.component.css']
})
export class TrackbyComponent implements OnInit {

//  For EX:1 code


  constructor() { }

  ngOnInit(): void {
  }
  products:any[] = [
    {Name: 'TV', Price: 46000.55},
    {Name: 'Mobile', Price:23000.44},
    {Name: 'Nike Casuals', Price: 6300.33}
  ];

  AddNewProduct(){
    this.products = [
      {Name: 'TV', Price: 46000.55},
      {Name: 'Mobile', Price:23000.44},
      {Name: 'Nike Casuals', Price: 6300.33},
      {Name: 'Watch', Price: 6700.55}
    ];
    alert('Add Clicked');
  }
  TrackChanges(index:number) {
    return index;
  }

}


// // For EX:2 code


// products:any[] = [
//   {Name: 'Nike Casuals', Photo: 'assets/nike shoe.jpg', Likes:0, Dislikes:0},
//   {Name: 'Puma Shoe', Photo: 'assets/puma shoe.jpg', Likes:0, Dislikes:0}
// ]
// constructor() { }

// ngOnInit(): void {
// }
// LikesClick(item:any){
//    item.Likes++;
// }
// DislikesClick(item:any) {
//   item.Dislikes++;
// }

// }