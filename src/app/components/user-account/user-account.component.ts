import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  submitted = false;
  fetchedUser: User;
  pan:string;
  accounttype:any;
  basecurrency:any;

  
  constructor(private service :UserService, private router:Router) { }

  ngOnInit(): void {
  }

  timeoutfunc1() {
    
    this.service.updateaccount(this.fetchedUser.id,this.fetchedUser).subscribe(
      data => console.log(data), 
      error => console.log(error));
    this. accounttype="";
    this.basecurrency="";
    this.router.navigate(['pin']);
  }
  timeoutfunc() {
    this.fetchedUser.accounttype=this.accounttype;
    this.fetchedUser.basecurrency=this.basecurrency;
    console.log(this.fetchedUser.id);
    setTimeout(() =>{
      this.timeoutfunc1();
    }, 1000);
    
  }

  onSubmit() {
    this.submitted = true;
    this.pan= this.service.getpan();
    this.service.list().subscribe(res=>{
      console.log(res);
      res.forEach(user => {
        if(user.pancardno==this.pan){
          this.fetchedUser=user;          
          console.log(this.fetchedUser);
          console.log(JSON.stringify(this.accounttype));
        }
      })
    })
    setTimeout(() =>{
      this.timeoutfunc();
    }, 200);
  }

  back(){
    this.router.navigate(['register']);
  }
}
