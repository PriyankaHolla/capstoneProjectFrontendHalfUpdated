import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:9002";
  user:User;

  constructor(private http:HttpClient) { }

  generateToken(credentials:any) {
    //generate token
    return this.http.post(`${this.url}/token`, credentials);
  }

  //calling the server to generate the token


  //to login a user
  loginUser(token) {
    localStorage.setItem("token", token);
    return true;
  }

  //to check if user is logged in
  isLoggedIn() {
    let token = localStorage.getItem("token");
    if(token == undefined || token == '' || token == null) {
      return false;
    }
    else {
      return true;
    }
  }

  logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  //to get the token
  getToken() {
    return localStorage.getItem("token");
  }

  saveUser(user:User) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    return localStorage.getItem("user");
  }

  updateUser(user:User){
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(user));
  }
}
