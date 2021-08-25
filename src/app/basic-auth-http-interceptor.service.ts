import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(`Username: ${sessionStorage.getItem('username')}, token: ${sessionStorage.getItem('jwtToken')}`)
    console.log(req)
    if(sessionStorage.getItem('username') && sessionStorage.getItem('jwtToken')){
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('jwtToken')
        }
      })
    }
    
    return next.handle(req);
  }

  constructor() { }
}
