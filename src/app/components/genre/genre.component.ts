import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IMovie} from "../../interfaces";
import {MovieService} from "../../services";
import {DataService} from "../../services/data.service";
import {urls} from "../../constants";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css',
    './main-layout.component.scss',]
})
export class GenreComponent implements OnInit {

  movies: IMovie[];
  movie: IMovie;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private dataService: DataService, private router: Router) {
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

  saveToStorage() {
    this.dataService.storage.next(this.movie);
  }

  redirectTo(){
    this.router.navigate([`${urls.movie}/${this.movie.id}`]);
  }

}
