import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  page: number;
  url: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  previousPage() {
    this.activatedRoute.url.subscribe((value) => {
      this.url = value[0].path
      this.activatedRoute.queryParams.subscribe(({page}) => {
        this.page = +page || 1
        this.page -= 1
      })
    })
    this.router.navigate([this.url], {queryParams: {page: this.page}})
  }

  nextPage() {
    this.activatedRoute.url.subscribe((value) => this.url = value[0].path)
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.page = +page || 1
      this.page += 1
    })
    this.router.navigate([this.url], {queryParams: {page: this.page}})
  }
}
