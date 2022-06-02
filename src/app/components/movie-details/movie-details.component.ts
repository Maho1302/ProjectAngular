import { Component, OnInit } from '@angular/core';
import {IPage} from "../../interfaces";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
movie: IPage;
  constructor() { }

  ngOnInit(): void {
  }

}
