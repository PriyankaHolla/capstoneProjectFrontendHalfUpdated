import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CapstoneTransactionService } from '../capstone-transaction.service';
import { LoginService } from '../services/login.service';
import { Transaction } from '../transaction';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-main-transaction',
  templateUrl: './main-transaction.component.html',
  styleUrls: ['./main-transaction.component.css']
})
export class MainTransactionComponent implements OnInit {
  sufficientAmount=false;
  user:User;
  submitted = false;
  exists = false;
  fetchedUser:User;
 transaction: Transaction = new Transaction();


 
  constructor(private service :UserService, private router:Router, private tranService:CapstoneTransactionService, 
    private loginService: LoginService) { }

  ngOnInit(): void {
    
    this.user = JSON.parse(this.loginService.getUser());
  }
   


   onSubmit(){
    this.service.list().subscribe(res=>{
      
      res.forEach(user => {
        if(user.accountno==this.transaction.reciever){
          this.exists=true;
          console.log(this.exists);
          this.fetchedUser=user;          
          console.log(this.fetchedUser);
         
         
        }
        
      })
    })


    if(this.user.basecurrency == "USD")
{
  if(this.user.usd<=this.transaction.amount){
    this.sufficientAmount=false;
    alert("No sufficient amount in account");
  }
}    
else if((this.user.basecurrency == "EUR")){
  if(this.user.usd<=this.transaction.amount){
    this.sufficientAmount=false;
    alert("No sufficient amount in account");
  }
}
else if((this.user.basecurrency == "GBP")){
  if(this.user.inr<=this.transaction.amount){
    this.sufficientAmount=false;
    alert("No sufficient amount in account");
  }
}

   
    

      setTimeout(() =>{
        this.timeoutfunc();
      }, 1000);
   console.log(this.transaction);
    
    //  }
    //  else if(this.exists==false){
    //    alert("This user does not exist");
    //  }
    
     
   } 
   timeoutfunc(){
    if(this.exists==true){
    this.transaction.sender = this.user.accountno;
    this.transaction.time = new Date().getTime();
    this.transaction.date= new Date().getDate();
    let resp=this.tranService.add(this.transaction);
    resp.subscribe((data:any)=>console.log(data));
    this.exists=false;
    console.log(this.transaction);
   
    }
    else{
      alert("user doesnt exist");
    }
  }
          back(){

          }
  }


