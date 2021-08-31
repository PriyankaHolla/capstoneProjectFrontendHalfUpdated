import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserService } from './user.service';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar'
import { LoginService } from './services/login.service';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './services/auth.interceptor';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { PinComponent } from './pin/pin.component';
import { AddMoneyComponent } from './components/add-money/add-money.component';
import { CapstoneTransactionService } from './capstone-transaction.service';
import { MainTransactionComponent } from './main-transaction/main-transaction.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    AccountDetailsComponent,
    UserAccountComponent,
    PinComponent,
    AddMoneyComponent,
    MainTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [UserService,CapstoneTransactionService ,LoginService, AuthGuard, [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
