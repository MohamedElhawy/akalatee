// MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// SERVICES
import { StatusService } from "./services/status.service";
import { UserService } from "./services/user.service";
import { HttpService } from "./services/http.service";


// COMPONENTS
import { AppComponent } from './components/app/app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';







@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    Error404Component,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ StatusService , UserService , HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
