import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Movie } from '../movie.model';
import { MoviesDataService } from '../moviesdata.service';
import { MoviedetailsviewComponent } from '../moviedetailsview/moviedetailsview.component';
@Component({
  selector: 'app-storeadmin',
  templateUrl: './storeadmin.component.html',
  styleUrls: ['./storeadmin.component.scss', '../style-movies.scss']
})
export class StoreadminComponent implements OnInit {

  detailsActive: boolean = false;
  selectedMovie: Movie;
  movies$: Movie[];
  @Output() detailsSelectedEvent = new EventEmitter;  

  @ViewChild("detailsView",{static: false}) MyProp: ElementRef;

  ngOnInit() {
    return this.movieDataService.getMovies()
    .subscribe(data => this.movies$ = data);
  }

  constructor(private movieDataService: MoviesDataService) {}

  updateMovieList(){
    return this.movieDataService.getMovies()
    .subscribe(data => this.movies$ = data);
  }


  detailsSelected(movie: Movie){
    console.log('Details Event: ' + movie.title);
 

      this.selectedMovie = movie;
      this.detailsActive =  true;
    
    this.detailsSelectedEvent.emit(<any>movie);
    document.getElementById("detailsView").scrollIntoView({ behavior: "smooth" } );
    //console.log("StoreAdmin: details emitted");
  }

  detailsLoaded(detailsOpen: boolean){
   // this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
   // console.log("StoreAdmin: details Loaded");
  }

  closeDetails(){
    this.detailsActive =  false;
    console.log("StoreAdmin: close Details");
  }

}
