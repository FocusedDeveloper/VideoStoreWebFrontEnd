import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-moviedetailsview',
  templateUrl: './moviedetailsview.component.html',
  styleUrls: ['./moviedetailsview.component.scss', '../style-movies.scss']
})
export class MoviedetailsviewComponent implements AfterViewInit, AfterContentChecked, AfterContentChecked  {


  ngAfterContentInit() {
    document.getElementById("detailsView").scrollIntoView({ behavior: "smooth" } );
  }

  @Input() movie: Movie;
  @Output() public detailsLoadedEvent = new EventEmitter;
  @Output() public closeDetailsEvent = new EventEmitter;
  
  constructor() { }


  ngAfterViewInit(){
    this.detailsLoaded(this.movie);
  }

  ngAfterContentChecked(){
    //document.getElementById("detailsView").scrollIntoView({ behavior: "smooth" } );
  }

  detailsLoaded(movie: Movie){
    // Adds a new movie to the store
    console.log("DetialsViews: Details Loaded");
    console.log(movie);
    this.detailsLoadedEvent.emit();
  }

  closeDetails(){
    this.closeDetailsEvent.emit();
  }

  getBackground(){

    return {'background-image': `url('http://image.tmdb.org/t/p/w780'${this.movie.backdrop}`};
  }

}
