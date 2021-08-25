import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username = "guestuser"
  password = ""
  errorMessage = "Invalid Credentials"
  invalidLogin = false

  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    this.loginservice.authenticate(this.username,this.password).subscribe(
      data=> {
        this.router.navigate(['member']);
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;
      }
    )
   /* console.log(this.username);
    if(this.loginservice.authenticate(this.username, this.password)){
      this.router.navigate(['admin'])
      //console.log("Login: passed");
      this.invalidLogin = false;
    }else{
     // console.log("Login: failed");
      this.invalidLogin = true;
    }
    */
  }

}
