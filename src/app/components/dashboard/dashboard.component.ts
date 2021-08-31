import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) { }

  user:User;


  ngOnInit(): void {
    this.getUser();
  }

  logoutUser() {
    this.loginService.logOut();
    this.router.navigate([""]);
  }

  getUser() {
    this.user= JSON.parse(this.loginService.getUser());
    console.log(this.user);
  }

  goToAccount() {
    this.router.navigate(["/details"]);
  }

  goToAddMoney() {
    this.router.navigate(["/addMoney"]);
  }
}
