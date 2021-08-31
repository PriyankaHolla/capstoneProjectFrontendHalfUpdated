import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
export class PinComponent implements OnInit {

  submitted = false;
  fetchedUser: User;
  pan:string;
  pin:number;
  confirmpin:number;
  pinval=true;

  constructor(private service :UserService, private router:Router) { }

  ngOnInit(): void {
    
  }
  timeoutfunc1(){
    
    this.service.updateaccount(this.fetchedUser.id,this.fetchedUser).subscribe(
      data => console.log(data), 
      error => console.log(error));
    this.pin=0;
    this.router.navigate(['login']);
  }

  timeoutfunc2(){
    this.router.navigate(['pin1']);
  }

  timeoutfunc(){
    if(this.pin==this.confirmpin){  
      this.pinval=true;
      this.fetchedUser.pin=this.pin;
      console.log(this.fetchedUser.id);
      setTimeout(() =>{
        this.timeoutfunc1();
      }, 500);
    }

    else{
      alert("Enter same pin");
      setTimeout(() =>{
      this.timeoutfunc2();
      }, 200);
    }
  }

  onSubmit() {
    this.submitted = true;
    this. pan= this.service.getpan();
    this.service.list().subscribe(res=>{
      console.log(res);
      res.forEach(user => {
        if(user.pancardno==this.pan){
          this.fetchedUser=user;
          console.log(this.fetchedUser);
        }    
      })
    })
    setTimeout(() =>{
      this.timeoutfunc();
    }, 100);
  }

  back(){
    this.router.navigate(['account']);
  }
}
