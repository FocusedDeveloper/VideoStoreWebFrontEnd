import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../movie.model';
import { MoviesDataService } from '../moviesdata.service';
import { NewmovieService } from '../newmovie.service';

@Component({
  selector: 'app-newmovieitem',
  templateUrl: './newmovieitem.component.html',
  styleUrls: ['./newmovieitem.component.sass', '../style-movies.scss']
})
export class NewmovieitemComponent implements OnInit {

  @Input() movie: Movie;
  @Output() public movieAddedEvent = new EventEmitter;
  @Output() public detailsSelectedEvent = new EventEmitter;

  movieDetails: Movie;

  constructor(private movieService: MoviesDataService, private newMovieService: NewmovieService) { }

  ngOnInit() {
  }

  onAddMovie(movie: Movie){
    // Adds a new movie to the store
    console.log(movie);
    this.movieService.addNewMovie(movie).subscribe(movie => console.log(movie));
    this.movieAddedEvent.emit(movie);
  }

  onViewDetails(movie: Movie){
    console.log("New Movie Item: Details");
    console.log(movie);
    movie.detailsActive=true;
    this.newMovieService.getMovieDetails(movie.id).subscribe(data => {
      this.movieDetails = data;
      this.detailsSelectedEvent.emit(this.movieDetails);
    });
    
  }

}
