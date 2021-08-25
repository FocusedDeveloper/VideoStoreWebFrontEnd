import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Movie} from '../movie.model'
import {MoviesDataService} from '../moviesdata.service'
import { NewmovieService } from '../newmovie.service';

@Component({
  selector: 'app-movieitem',
  templateUrl: './movieitem.component.html',
  styleUrls: ['./movieitem.component.sass', '../style-movies.scss']
})
export class MovieitemComponent implements OnInit {

  @Input() movie: Movie;
  @Input() copies: number;
  @Output() copiesAddedEvent = new EventEmitter;
  @Output() public detailsSelectedEvent = new EventEmitter;

  movieDetails: Movie;

  trueImage: string;

  constructor(private movieService:MoviesDataService, private newMovieService:NewmovieService) { 
    
    //this.trueImage = "http://image.tmdb.org/t/p/" + 
    //"w92" + movie.urlThumbnail;
  }

  ngOnInit() {
  
  }


  onAddCopies(movie: Movie, copies: number){
    // Add copes of movie on server
    copies = this.verifyCopies(copies);
    movie.stock = Number(movie.stock)+Number(copies);
    console.log(movie);
    this.movieService.addCopies(movie).subscribe(movie => {
      console.log(movie);
      this.copiesAddedEvent.emit();
    });
    
    
  }

  private verifyCopies(copies: number):number{
    if(copies < 5 || copies > 30 ){
      copies = Number(10);
    }
    return copies;
  }

  onViewDetails(movie: Movie){
    console.log("MovieItem: Details");
    console.log(this.movieDetails);
    //movie.detailsActive=true;
    this.newMovieService.getMovieDetails(movie.id).subscribe(data =>{ 
      this.movieDetails = data;
      console.log("MovieItem: Details");
    console.log(this.movieDetails);
    this.detailsSelectedEvent.emit(this.movieDetails);
      
    });
    
  }

}
