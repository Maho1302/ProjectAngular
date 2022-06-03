import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces";
import {MovieService} from "../../services";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
@Input()
movie: IMovie;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

}
