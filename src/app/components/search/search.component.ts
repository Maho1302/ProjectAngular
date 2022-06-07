import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../../services";
import {IMovie} from "../../interfaces";
import {DataService} from "../../services/data.service";
import {urls} from "../../constants";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movie: IMovie;
  form: FormGroup;
  searchData: IMovie[];
  results: IMovie[];

  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private dataService: DataService) {
    this._createForm();
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      search: new FormControl(null, [Validators.required])
    })
  }


  search(): void {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      let rawValue = this.form.getRawValue();
      this.movieService.search(rawValue.search, page || 1).subscribe(({results}) => {
        this.searchData = results
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

