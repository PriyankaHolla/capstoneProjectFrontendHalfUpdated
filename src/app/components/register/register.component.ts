import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = new User();

  submitted = false;
 

  constructor(private service:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  public registerNow(){

    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data:any)=>console.log(data));
  }
   
  onSubmit() {
    this.submitted = true;
    this.service.doRegistration(this.user).subscribe(
      data => console.log(data), 
      error => console.log(error));
    this.service.setpan(this.user.pancardno);
    this.user = new User();
    this.router.navigate(['account']);  
  }

}
