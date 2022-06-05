import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  @Input()
  poster: string;
  posterValue:string

  constructor() { }

  ngOnInit(): void {
  }

}
