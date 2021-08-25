import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { MoviesDataService } from './moviesdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h1>Welcome to {{title}}</h1>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //movies$: Movie[];
  
  ngOnInit() {
  //  return this.movieDataService.getMovies()
  //  .subscribe(data => this.movies$ = data);
  }

  constructor(private movieDataService: MoviesDataService) {}
  title = 'moviestore';

}
