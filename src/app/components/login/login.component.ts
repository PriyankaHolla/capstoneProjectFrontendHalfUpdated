import { Component, OnInit, ElementRef } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:"",
    password:""
  }

  public fetchedUser:User;

  constructor(private loginService:LoginService, private userService:UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if((this.credentials.username != "" && this.credentials.password != "") && (this.credentials.username != null && this.credentials.password != null)) {
      //token generate
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any) => {
          console.log(response.token);
          this.userService.list().subscribe(res=>{
            res.forEach(user => {
              if(user.username == this.credentials.username){
                this.loginService.saveUser(user);          
              }
            })
            this.loginService.loginUser(response.token);
            window.location.href = '/dashboard';
          })
        },
        error => {
          console.log(error);
        }
      )
    }
    else{
      console.log("fields are empty");
    }
  }

}
