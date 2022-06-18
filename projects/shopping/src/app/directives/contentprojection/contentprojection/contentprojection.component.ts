import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contentprojection',
  templateUrl: './contentprojection.component.html',
  styleUrls: ['./contentprojection.component.css']
})
export class ContentprojectionComponent implements OnInit {
  thenBlock:TemplateRef<any>|null = null;
  isVisible:boolean = true;

  @ViewChild('Block1', {static:true}) Block1:TemplateRef<any>|null = null;
  @ViewChild('Block2', {static:true}) Block2:TemplateRef<any>|null = null;
  constructor() { }

  ngOnInit(): void {
    this.thenBlock = this.Block1;
  }
  SwitchClick(){
     this.thenBlock = (this.thenBlock==this.Block1)?this.Block2:this.Block1;
  }

}
