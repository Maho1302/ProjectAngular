import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {IGenre} from "../../interfaces";
import {DatagenreService} from "../../services/datagenre.service";
import {MovieService} from "../../services";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css',
    './main-layout.component.scss',]
})
export class GenresComponent implements OnInit {

  genres: IGenre[];

  constructor(private movieService: MovieService, private router: Router, private datagenreService: DatagenreService) {
  }

  ngOnInit(): void {
    this.movieService.getGenre().subscribe(({genres}) => {
      this.genres = genres;
      this.datagenreService.storage.next(genres)
    })
  }

  sortGenre(genre: IGenre) {
    this.router.navigate([genre.id])
  }
}
