import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewmovieService } from '../newmovie.service';
import { Movie } from '../movie.model';
import { MovieQuery } from '../moviequery.model';
import { MoviesDataService } from '../moviesdata.service';

@Component({
  selector: 'app-newmovies',
  templateUrl: './newmovies.component.html',
  styleUrls: ['./newmovies.component.sass', '../style-movies.scss']
})
export class NewmoviesComponent implements OnInit {

 // newMovieService: NewmovieService;
  movies$: Movie[];
  movieQuery: MovieQuery
  
  @Output() movieAddedEvent = new EventEmitter;  
  @Output() detailsSelectedEvent = new EventEmitter;  

  constructor(private movieService: MoviesDataService) {
  
   }

  ngOnInit() {
    this.movieQuery = new MovieQuery;
    // getMovies(2, new Integer[]{28} , null, null, "2018-01-01", "2018-12-31",  null);
    //movieQuery.page = 2;
    //movieQuery.genre = [28];
    return this.movieService.getNewMovies(this.movieQuery)
    .subscribe(data => this.movies$ = data);
  }

  fetchNewMovies(updatedMovieQuery: MovieQuery) {
    //updatedMovieQuery.page = 3;
    this.movieQuery = updatedMovieQuery;
    // getMovies(2, new Integer[]{28} , null, null, "2018-01-01", "2018-12-31",  null);
    //movieQuery.genre = [28];
    return this.movieService.getNewMovies(this.movieQuery)
    .subscribe(data => this.movies$ = data);
  }

  updatedMovieList(){
    this.movieAddedEvent.emit();
  }

  detailsSelected(movie: Movie){
    console.log('Details Event: ' + movie.title);
   // var index = this.movies$.findIndex(currMovie => currMovie.id == movie.id);
    //this.movies$[index] = movie;
    this.detailsSelectedEvent.emit(movie);
  }
  



}
