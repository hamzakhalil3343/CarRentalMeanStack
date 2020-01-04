import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.page.html',
  styleUrls: ['./adminpanel.page.scss'],
})
export class AdminpanelPage implements OnInit {

  constructor( private http: HttpClient,private formBuilder: FormBuilder) { }
  adminForm: FormGroup;

  title = 'fileUpload';
  images;
  
  ngOnInit() {
    this.formInitializer();
    
    
  }
  fileupload(event){
   console.log(event);
   if (event.target.files.length > 0) {
    const file  = event.target.files[0];
    
    this.images = file ;
  }
  }


  onSubmit(){
    console.log(this.adminForm.value);
    const formData = new FormData();
    formData.append('file', this.images);
    formData.append('price',this.adminForm.get('price').value);
    formData.append('name',this.adminForm.get('name').value);
    

    this.http.post<any>('http://localhost:3000/file', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );


  }


  formInitializer() {
    this.adminForm = this.formBuilder.group({
      file: [null, [Validators.required]],
      price: [null, [Validators.required]],
      name: [null, [Validators.required]]
      
    });
  }
  
}
