import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image';

  imageSrc: any = '';
  

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  

  constructor(private http: HttpClient) { }
  
  get f(){
    return this.myForm.controls;
  }
  
  onFileChange(event:any) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
     
        this.myForm.patchValue({
          fileSource: reader.result
        });
   
      };
   
    }
  }

  submit(){
    console.log(this.myForm.value);
    this.http.post('http://localhost:3000/images', this.myForm.value)
      .subscribe(res => {
        console.log(res);
        alert('Image Uploaded Successfully.');
        this.myForm.reset();
      })
  }

}
