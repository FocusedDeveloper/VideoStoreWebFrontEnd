import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import {Movie} from '../movie.model'
import {MoviesDataService} from '../moviesdata.service'
import { NewmovieService } from '../newmovie.service';

@Component({
  selector: 'app-movieitemmemeberview',
  templateUrl: './movieitemmemeberview.component.html',
  styleUrls: ['./movieitemmemeberview.component.scss', '../style-movies.scss']
})
export class MovieitemmemeberviewComponent implements OnInit {

  
  @Input() movie: Movie;
  @Input() copies: number;
  @Output() updateStockEvent = new EventEmitter;
  @Output() detailsSelectedEvent = new EventEmitter;

  movieDetails : Movie;

  trueImage: string;

  constructor(private movieService:MoviesDataService, private newMovieService: NewmovieService) { 
    
    //this.trueImage = "http://image.tmdb.org/t/p/" + 
    //"w92" + movie.urlThumbnail;
  }

  ngOnInit() {
  
  }

  rentMovie(movie: Movie){
    //console.log(movie);
    this.movieService.rentMovie(movie).subscribe(response => {
      console.log(response)
      this.updateStockEvent.emit();
    });
    
  }

  returnMovie(movie: Movie){
    //console.log(movie);
    this.movieService.returnMovie(movie).subscribe(response => {
      console.log(response);
      this.updateStockEvent.emit();
    });
    
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
