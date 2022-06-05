import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IMovie} from "../../interfaces";
import {MovieService} from "../../services";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  movies: IMovie[];

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.activatedRoute.params.subscribe(value => {
        this.movieService.sortGenre(value['genre'],page || 1).subscribe(({results}) => {
          this.movies = results
        })
      })

    })
  }

}
