import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../services";
import {IMovie} from "../../interfaces";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form: FormGroup;
  searchValue: IMovie[];
  result: IMovie[];


  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute,
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

    //   this.activatedRoute.queryParams.subscribe(({page}) => {
    //     let rawValue = this.form.getRawValue();
    //     this.movieService.search(rawValue.search, page || 1).subscribe(({results}) => {
    //       this.searchValue = results
    //     })
    //   })

  }
}

