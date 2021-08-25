import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
import { Secret } from './secret.model';

export class User{
  constructor( 
    public status:string,
    public jwt:string)
  {}
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(username, password) {

    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.httpClient.post<User>(Secret.BACKENDBASE + '/authenticate',{ username, password}).pipe(
      map(
        userData => {
         
          sessionStorage.setItem('username',username);
          let jwtToken =  'Bearer ' + userData.jwt;
          sessionStorage.setItem('jwtToken', jwtToken);
          console.log(userData);
          return userData;
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
      )
    );


   /* console.log("Auth.UserName: "+username)
    if(username==="charles"&& password==="password"){
     // console.log("Authentication passed")
      sessionStorage.setItem('username', username)
      return true;
    }else if(username==="user"&& password==="user"){
     // console.log("Authentication passed")
      sessionStorage.setItem('username', username)
      return true;
    }else{
     // console.log("Authentication failed")
      return false;
    }
    */
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
   // console.log(!(user===null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

  getUserName(){
    return sessionStorage.getItem('username');
  }
}
