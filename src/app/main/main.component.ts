import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'flixd-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  movies$: Observable<Movie[]>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.movies$ = this.moviesService.getMovies();
  }

}
