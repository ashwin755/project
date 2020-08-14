import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { FormenComponent } from './formen/formen.component';
import { ForwomenComponent } from './forwomen/forwomen.component';

const routes: Routes = [ 
{path:'',component:UserHomeComponent},
{ path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'formen',component:FormenComponent},
{path:'forwomen',component:ForwomenComponent}
];

 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
