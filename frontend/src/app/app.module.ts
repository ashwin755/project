import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormenComponent } from './formen/formen.component';
import { ForwomenComponent } from './forwomen/forwomen.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserHomeComponent,
    FooterComponentComponent,
    ProductDetailsComponent,
    LoginComponent,
    SignupComponent,
    FormenComponent,
    ForwomenComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
