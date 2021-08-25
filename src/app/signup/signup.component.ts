import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { MoviesDataService } from '../moviesdata.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit { 

  newUser = new UserModel('guest', '', ''); 

  name: ''
  password1: ''
  password2: ''
  passwordConfirmed = false;

  constructor(private router: Router,  private formBuilder: FormBuilder, private movieDataService: MoviesDataService) {}

   

  ngOnInit() {}



    
  onSubmit(){

    this.passwordConfirmed = this.newUser.userPassword === this.password2;
    console.log(this.newUser);
    console.log( this.passwordConfirmed);

    if(this.passwordConfirmed){
        this.movieDataService.addUser(this.newUser).subscribe(data => data);
        this.router.navigate(['login']);

    }else{

    }

    
  }

}

