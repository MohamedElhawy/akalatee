import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from "../components/sign-in/sign-in.component";
import { SignUpComponent } from "../components/sign-up/sign-up.component";
import { HomeComponent } from "../components/home/home.component";
import { Error404Component } from "../components/error404/error404.component";




const routes: Routes = [
  { path: "" , redirectTo: "sign-in" , pathMatch: "full" },
  { path: "sign-in" , component: SignInComponent },
  { path: "sign-up" , component: SignUpComponent },
  { path: "home" , component: HomeComponent },
  { path: "**" , component: Error404Component },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
