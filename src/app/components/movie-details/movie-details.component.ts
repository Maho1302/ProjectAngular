import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../../services";
import {IGenre, IMovie} from "../../interfaces";
import {DataService} from "../../services/data.service";
import {DatagenreService} from "../../services/datagenre.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  movie: IMovie;
  genres:IGenre[];
  genresNames: IGenre[]

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private movieService: MovieService,
              private dataService: DataService,
              private datagenreService: DatagenreService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['movie'] as IMovie;

      if (state) {
        this.movie = state
      } else {
        this.movieService.getById(id).subscribe(value => this.movie = value)
      }
    })

    this.dataService.storage.subscribe(value => {
      this.movie = value;
    })

    this.datagenreService.storage.subscribe(value => {this.genres = value})

    let array = [] as IGenre[];
    for (let id of this.movie.genre_ids) {
      this.genres.map(genre => {
        if (id === genre.id) {
          array.push(genre)
        }
      });
      this.genresNames = array
    }


  }

}
