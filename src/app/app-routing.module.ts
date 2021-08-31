import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { PinComponent } from './pin/pin.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AddMoneyComponent } from './components/add-money/add-money.component';
import { MainTransactionComponent } from './main-transaction/main-transaction.component';

const routes: Routes = [  
  {path:"",redirectTo:"",pathMatch:"full", component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path: "login", component:LoginComponent},
  {path: "dashboard", component:DashboardComponent, canActivate:[AuthGuard]},
  {path:"account",component: UserAccountComponent},
  {path:"pin",component:PinComponent},
  {path:"pin1",component:PinComponent},
  {path:"details", component:AccountDetailsComponent},
  {path:"addMoney", component:AddMoneyComponent},
  {path:"transaction1", component:MainTransactionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
