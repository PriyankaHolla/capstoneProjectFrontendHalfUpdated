import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentpan:string;

  setpan(pan:string)
  {
    this.currentpan=pan;
  }

  getpan()
  {
    return this.currentpan;
  }

  doRegistration(user: any) {
    user.accountno=  Math.floor(10000000000 + Math.random() * 90000000000);
    return this.http.post("http://localhost:9002/api/users/register",user);
  }

  getUser() {
    return this.http.get("http://localhost:9002/api/users");
  }

  updateaccount(id:any, data: any) {
    console.log(data);
    return this.http.put(`http://localhost:9002/api/users/register/${id}`, data);
  }
  
  list(): Observable<any> {
    return this.http.get("http://localhost:9002/api/users");
  }
  
  constructor(private http:HttpClient) { }

}


