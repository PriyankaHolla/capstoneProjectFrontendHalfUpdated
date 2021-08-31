import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  user:User;
  dollar = false;
  euro = false;
  rupee = false;

  constructor(private loginService:LoginService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.loginService.getUser());
    this.isDollar();
    this.isEuro();
    this.isRupee();
  }

  goBack() {
    this.router.navigate(["/dashboard"]);
  }

  isDollar() {
    if(this.user.usd > 0){
      this.dollar = true;
    }
  }

  isEuro() {
    if(this.user.eur > 0){
      this.euro = true;
    }
  }

  isRupee() {
    if(this.user.inr > 0){
      this.rupee = true;
    }
  }
}
