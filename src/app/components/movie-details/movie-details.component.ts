import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../../services";
import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
movie: IMovie;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IMovie;

      if (state) {
        this.movie = state
      } else {
        this.movieService.getById(id).subscribe(value => this.movie = value)
      }
    })
  }

}
