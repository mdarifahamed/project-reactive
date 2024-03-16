import { NgModule, signal } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ServiceComponent } from './service/service.component';
import { SignupComponent } from './signup/signup.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },

  {
    path:"about",
    component:AboutComponent
  },

  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"service",
    component:ServiceComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"info",
    component:InfoComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
