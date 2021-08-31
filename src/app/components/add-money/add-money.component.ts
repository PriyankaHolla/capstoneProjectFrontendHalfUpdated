import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit {

  user:User;
  amount:number;
  pin:number;
  currency:string;

  constructor(private router:Router, private loginService:LoginService, private userSerivce:UserService) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.loginService.getUser());
  }

  goBack() {
    this.router.navigate(["/dashboard"]);
  }

  onSubmit() {
    if(this.pin != this.user.pin) {
      alert("Invalid Pin!");
    }
    else{
      this.currency = this.user.basecurrency.toLowerCase();
      if(this.currency === "usd") {
        this.user.usd += this.amount;
      }
      else if(this.currency === "eur") {
        this.user.eur += this.amount;
      }
      else{
        this.user.inr += this.amount;
      }
      this.loginService.updateUser(this.user);
      this.userSerivce.updateaccount(this.user.id, this.user).subscribe(response =>{
        console.log(response);
      });
    }
  }
}
