import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Movie } from './movie.model';
import { Observable } from 'rxjs';
import { MovieQuery } from './moviequery.model';
import { Secret } from './secret.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class NewmovieService {

  apiUrl = Secret.BACKENDBASE + '/storeapi';
  newMovies:string = '/newmovies';


  

  constructor(
    private _http: HttpClient
    )
     { }

  getNewMovies(moviequery: MovieQuery):Observable<Movie[]>
  {
    console.log("Request Sent"+this.apiUrl+moviequery.queryToString());
    return this._http.get<Movie[]>(this.apiUrl+ this.newMovies + moviequery.queryToString());
  }

  getMovieDetails(movieId: number):Observable<Movie>
  {
    const details:string = '/details';
    const params = new HttpParams().set('id', movieId.toString());
    console.log("Request Sent"+this.apiUrl+details);
    return this._http.get<Movie>(this.apiUrl+details,{params});
  }

  addCopies(movie: Movie):Observable<any>
  {
    return this._http.put(this.apiUrl+ this.newMovies , movie, httpOptions);
  }
}
