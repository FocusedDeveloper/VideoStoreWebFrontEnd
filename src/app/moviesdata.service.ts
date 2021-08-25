import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Movie } from './movie.model';
import {MovieQuery} from './moviequery.model'
import { Observable } from 'rxjs';
import { Cast } from './cast.model';
import { UserModel } from './user.model';
import { Secret } from './secret.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class MoviesDataService {
  apiUrl = Secret.BACKENDBASE + '/api/moviedvd';
  apiUrlNewMovieQuery = Secret.BACKENDBASE + '/storeapi/newmovies';
  apiUrlFindCast = Secret.BACKENDBASE + '/storeapi/cast';
  apiUserUrl = Secret.BACKENDBASE + '/user';

  constructor(
    private _http: HttpClient
    )
     { }

  getMovies():Observable<Movie[]>
  {
  //  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('Charles:pass')});
   // return this._http.get<Movie[]>(this.apiUrl, {headers} );
    return this._http.get<Movie[]>(this.apiUrl);
  }

  addCopies(movie: Movie):Observable<any>
  {
    const url:string = `${this.apiUrl}`;
    console.log(url);
  /*
  
    const userInfo = 'Basic '+ btoa('Charles:pass');
    httpOptions.headers.set('Authorization',userInfo)
    return this._http.put(url, movie, httpOptions); */
    return this._http.put(url, movie);
  }

  getNewMovies(moviequery: MovieQuery):Observable<Movie[]>
  {
    /*
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('Charles:pass')});
    console.log("Request Sent"+this.apiUrlNewMovieQuery+moviequery.queryToString());
    return this._http.get<Movie[]>(this.apiUrlNewMovieQuery+moviequery.queryToString(), {headers}); */
    return this._http.get<Movie[]>(this.apiUrlNewMovieQuery+moviequery.queryToString() );
  }

  addNewMovie(movie: Movie):Observable<any>
  {
    const url:string = `${this.apiUrl}`;
    console.log(url);
    console.log(movie.title);
   // const userInfo = 'Basic '+ btoa('Charles:pass');
   // httpOptions.headers.set('Authorization',userInfo)
   //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('Charles:pass')});
    //return this._http.post(url, movie, httpOptions);
   // return this._http.post(url, movie, {headers});
    return this._http.post(url, movie );
  }

  getCast(cast: string):Observable<Cast[]>{
    
    const params = new HttpParams().set('castString', cast);
    return this._http.get<Cast[]>(this.apiUrlFindCast,{params}); 
  }

  addUser(user: UserModel):Observable<any>{
    return this._http.post(this.apiUserUrl, user);
  }

  rentMovie(movie: Movie):Observable<any>
  {
    const checkout:string = '/checkout';
    return this._http.put<any>(this.apiUserUrl+checkout, movie);
  }

  returnMovie(movie: Movie):Observable<any>
  {
    const returnStr:string = '/return';
    return this._http.put<any>(this.apiUserUrl+returnStr, movie);
  }

  getUserMovieRentals():Observable<Movie[]>
  {
    const getRentalMovies:string = '/checkedOutMovies';
    return this._http.get<Movie[]>(this.apiUserUrl + getRentalMovies);
  }


}
