import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IMovie} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  storage = new BehaviorSubject<IMovie>({id: 3, adult: true, backdrop_path: '', poster_path: '',  title: '', genre_ids: [], original_language: '', original_title: '', overview: '', vote_average: 0, vote_count: 0, popularity: 0, release_date: ''});

  constructor() {
  }
}
