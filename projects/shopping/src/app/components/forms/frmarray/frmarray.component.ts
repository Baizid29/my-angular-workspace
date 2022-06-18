import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-frmarray',
  templateUrl: './frmarray.component.html',
  styleUrls: ['./frmarray.component.css']
})
export class FrmarrayComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  frmRegister:any;

 ngOnInit(): void {
    this.frmRegister =  this.fb.group({
        Name: this.fb.control(''),
        Price: this.fb.control(0),
        frmStock: this.fb.group({
          Status: this.fb.control(true),
          City: this.fb.control('Delhi')
        }),
        newControls: this.fb.array([this.fb.control('')])
    })  
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
