import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent implements OnInit {

//EX: Without using FormBuilder Service in Model Form/Reactive Form

  frmRegister = new FormGroup({
    Name: new FormControl(''),
    Price: new FormControl(0),
    frmStock: new FormGroup({
        Status : new FormControl(true),
        City   : new FormControl('')
    })
})

constructor() { }

ngOnInit(): void {
 
}
FormSubmit(obj:any){
  alert(JSON.stringify(obj));
}
UpdatePartial(){
  this.frmRegister.patchValue({
      Name: 'Samsung TV',
      frmStock: {
         City: 'Hyd'
      }
  })
}

}


//  Note: (Above) Allocating memory for control every time will overload memory.
//        It is good for discreet operations, but not for continous operations

//        You can design a form with continous memory without disconnected access by using a service "FormBuilder".

//Ex: With FormBuilder Service

// constructor(private fb: FormBuilder) { }

// frmRegister:any;

// ngOnInit(): void {
//   this.frmRegister =  this.fb.group({
//       Name: this.fb.control(''),
//       Price: this.fb.control(0),
//       frmStock: this.fb.group({
//         Status: this.fb.control(true),
//         City: this.fb.control('Delhi')
//       })
//   })  
// }
// FormSubmit(obj:any){
//  alert(JSON.stringify(obj));
// }
// UpdatePartial(){
//  this.frmRegister.patchValue({
//      Name: 'Samsung TV',
//      frmStock: {
//         City: 'Hyd'
//      }
//  })
// }

// }
