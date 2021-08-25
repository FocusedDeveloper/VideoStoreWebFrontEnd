import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cast } from './cast.model';
import { Secret } from './secret.model';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

apiUrl = "https://api.themoviedb.org/3/search/person?";

apiKey = Secret.APIKEY;

person = "person?";

queryPrefix = "&language=en-US&query=";

querySuffix = "&page=1&include_adult=false";



  constructor( private _http: HttpClient) { }

  getCast(castString){
    console.log(this.apiUrl+this.person+this.apiKey+this.queryPrefix+castString+this.querySuffix);
    return this._http.get(this.apiUrl+this.person+this.apiKey+this.queryPrefix+castString+this.querySuffix);
    
  }
}
