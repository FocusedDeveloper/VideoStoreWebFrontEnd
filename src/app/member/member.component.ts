import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie.model';
import { MoviesDataService } from '../moviesdata.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.sass', '../style-movies.scss','./member.component.scss']
})
export class MemberComponent implements OnInit {

  @Output() detailsSelectedEvent = new EventEmitter;  
  @ViewChild("detailsView",{static: false}) MyProp: ElementRef;
  
  constructor(private route:ActivatedRoute, private movieDataService: MoviesDataService) { }

  name = ""
  rentedMovies$: Movie[];
  availableMovies$: Movie[];
  detailsActive: boolean = false;
  selectedMovie: Movie;

  ngOnInit() {

  
    this.name = sessionStorage.getItem('username');
    
    this.updateMovieList();


  }

  updateMovieList(){
    console.log("Member Comp: updateMovieList");
    return this.movieDataService.getUserMovieRentals()
    .subscribe(data => {
      this.rentedMovies$ = data;
      console.log(data);
      this.rentedMovies$.forEach(element => {
        element.currentlyRentedbyMember = true;
      });
      this.updateAvailableMovieList();
    });

  }

  updateAvailableMovieList(){
    console.log("Member Comp: updateAvailableMovieList");
    return this.movieDataService.getMovies()
    .subscribe(data => {
      this.availableMovies$ = data;
      this.removeRentedFromAvailable();
    });

    
  }

  removeRentedFromAvailable(){
    if(this.rentedMovies$){
      this.rentedMovies$.forEach( (rented) =>{
        this.availableMovies$ = this.availableMovies$.filter( (availableMovie) => {
          return availableMovie.id != rented.id;
        } );
      })
    }
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
    //this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", alignToTop: "true" });
    //document.getElementById("detailsView").scrollIntoView();
   // console.log("StoreAdmin: details Loaded");
  }

  closeDetails(){
    this.detailsActive =  false;
    console.log("StoreAdmin: close Details");
  }

}
