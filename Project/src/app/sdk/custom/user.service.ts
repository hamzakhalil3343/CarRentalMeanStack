import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BookyConfig } from './booky.config';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  public userLogin(credentials: object): Observable<any> {

    // this url will be http://localhost:3000/login
    const url = BookyConfig.getPath() + '/login';

    return this.http.post(url, credentials);
  }


   //register fun
   public userRegister(credentials: object): Observable<any> {

    // this url will be http://localhost:3000/login
    const url = BookyConfig.getPath() + '/signup';

    return this.http.post(url, credentials);
  }

  //admin register
  public adminRegister(credentials: object): Observable<any> {

    // this url will be http://localhost:3000/register-admin
    const url = BookyConfig.getPath() + '/signupadmin';

    return this.http.post(url, credentials);
  }
  //admin Login
  public adminLogin(credentials: object): Observable<any> {

    // this url will be http://localhost:3000/login admin
    const url = BookyConfig.getPath() + '/loginAdmin';

    return this.http.post(url, credentials);
  }

}
