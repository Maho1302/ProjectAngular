import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services";
import {IMovie} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css',
    './main-layout.component.scss',]
})
export class MoviesComponent implements OnInit {

  movies: IMovie[];
  page:number;

  constructor(private movieService: MovieService,
              private router: Router,
              private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe( ({page}) => {
      this.movieService.getAll(page || 1).subscribe(value => {
        this.movies = value.results;
      })
    })

  }

  pageChange(num: number) {
    this.page = num
  }

}
