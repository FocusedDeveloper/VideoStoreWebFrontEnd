import { Component, OnInit, Input, EventEmitter, Output, ViewChildren, QueryList, ElementRef } from '@angular/core';
import {MovieQuery} from '../moviequery.model';
import { TmdbService } from '../tmdb-service.service';
import { Cast } from '../cast.model';
import { NewmovieService } from '../newmovie.service';
import { MoviesDataService } from '../moviesdata.service';

@Component({
  selector: 'app-newmoviequerymenu',
  templateUrl: './newmoviequerymenu.component.html',
  styleUrls: ['./newmoviequerymenu.component.sass']
})
export class NewmoviequerymenuComponent implements OnInit {

  //@Input("genre") genre:string;

  private movieQuery: MovieQuery;
  public genreArray: any [] = MovieQuery.movieGenreArray;
  public castOptions: Cast[] = [];
  public isCastFull: boolean;
  public ratingArray: string[] = MovieQuery.movieRatingsArray;
  public ratingsFilterVar: boolean = false;


  @Output() public queryChangeEvent = new EventEmitter;

  constructor(private moviesdata: MoviesDataService) { }

  ngOnInit() {
    //this.genreArray = new Array();
    this.isCastFull = false;
    this.movieQuery = new MovieQuery();
   for( let i = 0; i < this.genreArray.length; i++){
    this.genreArray[i].active = false;
      console.log(this.genreArray[i]);
    }    
  }

  toggleRating(isChecked){
    this.ratingsFilterVar = isChecked;
  
    this.movieQuery.rated = "";
    this.onRatingChange("",isChecked) 
  }

  onGenreChange(id: number,checked: boolean){
    console.log(id);
    console.log(checked);
    
    this.genreArray[id].active = checked; // checked
    this.movieQuery.movieGenre = this.genreArray;
  
    console.log(this.movieQuery.movieGenre.filter(genre => genre.active == true).map(activeGenre => activeGenre.id) );
   
   /* for(let i = 0; i < this.genreArray.length; i++){
      console.log(this.genreArray[i].name + " " + this.genreArray[i].active);
    }
    */
   this.onQueryChange();
  }

  onRatingChange(rating:string, isChecked:boolean){
    console.log("Rating: "+ rating + ", " +isChecked);
    this.movieQuery.rated = rating;
    this.onQueryChange();
  }

  onCastInput(cast:string){
    for(let i = 0; i < this.castOptions.length; i++){
      this.castOptions.pop();
    }
    cast = cast.replace(" ","%20");
    console.log(cast);
    this.moviesdata.getCast(cast).subscribe( data => this.castOptions = data);

  }

  onCastSelected(id:number){
    if(!this.movieQuery.cast){
      this.movieQuery.cast = [];
    }
    this.movieQuery.cast[this.movieQuery.cast.length] = Number(id);
    for( let i = 0; i < this.movieQuery.cast.length; i++){
      console.log(this.movieQuery.cast[i]);
    }    

    delete this.castOptions;
    this.castOptions = [];
    this.isCastFull = (this.movieQuery.cast.length  >= 2 ) ?  true : false ;

    this.onQueryChange();

  }

  beforeDateChanged(beforeDate){
    console.log('submit: '+beforeDate);
    this.movieQuery.dateReleasedBefore = beforeDate;
    this.onQueryChange();
  }

  afterDateChanged(afterDate){
    console.log('submit: '+afterDate);
    this.movieQuery.dateReleasedAfter = afterDate;
    this.onQueryChange();
  }

  @ViewChildren("checkbox") checkboxes: QueryList<ElementRef>;

uncheckAll() {
  this.checkboxes.forEach((element) => {
    element.nativeElement.checked = false;
  });
}

  resetSearch(){
   // this.allCheckBoxes = false;
  //  delete this.castOptions;
  for( let i = 0; i < this.genreArray.length; i++){
    this.genreArray[i].active = false;
      console.log(this.genreArray[i]);
    }    
    this.castOptions = [];
    this.isCastFull = false;
    this.movieQuery = new MovieQuery();
    this.uncheckAll();

    this.onQueryChange();
  }

  onQueryChange(){
    this.queryChangeEvent.emit(this.movieQuery);
     // console.log();
  }

}
