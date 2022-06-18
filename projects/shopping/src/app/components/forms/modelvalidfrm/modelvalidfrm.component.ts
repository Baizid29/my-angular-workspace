import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-modelvalidfrm',
  templateUrl: './modelvalidfrm.component.html',
  styleUrls: ['./modelvalidfrm.component.css']
})
export class ModelvalidfrmComponent implements OnInit {

  

  constructor(private fb: FormBuilder) { }

   frmRegister:any;

  ngOnInit(): void {
     this.frmRegister =  this.fb.group({
         Name: this.fb.control('',[Validators.required, Validators.minLength(4)]),
         Price: this.fb.control(0),
         frmStock: this.fb.group({
           Status: this.fb.control(true),
           City: this.fb.control('Delhi')
         }),
         newControls: this.fb.array([this.fb.control('')])
     })  
  }

  get Name() {
    return this.frmRegister.get('Name') as FormControl;
  }

  get NewControls(){
    return this.frmRegister.get('newControls') as FormArray;
  }
  AddClick(){
    this.NewControls.push(this.fb.control(''));
  }
  RemoveClick(i:number){
    this.NewControls.removeAt(i);
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