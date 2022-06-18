import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {

  @Input() message:string|null = 'waiting for message from parent..';
  @Input() obj:any = {};
  messageToParent = 'Hello ! from Child';

  @Output() ChildComponentClick:EventEmitter<string> = new EventEmitter<string>();
  @Output() ChildComponentSendObjectClick:EventEmitter<any> = new EventEmitter<any>();

  product:any  = {'Name': 'Nike Casuals', 'Price': 6600.33};

  constructor() { }

  ngOnInit(): void {
  }

  SendClick(){
    this.ChildComponentClick.emit(this.messageToParent);
    this.ChildComponentSendObjectClick.emit(this.product);
  }

}
