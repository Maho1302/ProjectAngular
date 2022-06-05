import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services";
import {IMovie} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {PaginationService} from "ngx-pagination";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IMovie[];
  page:number;

  constructor(private movieService: MovieService,
              private router: Router,
              private route: ActivatedRoute,
              private paginationService:PaginationService) {
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe( ({page}) => {
      this.movieService.getAll(page || 1).subscribe(value => {
        this.movies = value.results;
        console.log(value.results);

      })
    })

    this.paginationService.register({
      id: 'test',
      itemsPerPage: 20,
      currentPage: 1,
      totalItems: 500,
    });
  }

  pageChange(num: number) {
    this.page = num
  }



}
