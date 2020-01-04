import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
cars=[];
  imageUrl="assets/img/mehran.jpg";
  
  constructor(private http: HttpClient) {}
  ngOnInit() {
    var cars=[];
    
    this.http.get<any>('http://localhost:3000/home').subscribe(response => this.cars = response
    
    )
    // cars.forEach(element => {
    //   let imageBinary = element.path;
    //   let imageBase64String= btoa(imageBinary);
    //   this.imageUrl = 'data:image/jpeg;base64,' + imageBase64String;

    // });
    //image binary data response from api


  
    
  }

}
