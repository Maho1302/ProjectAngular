import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../constants";
import {IMovie} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }


  getAll(): Observable<IMovie[]> {
    return this.httpClient.get<IMovie[]>(urls.movies)
  }

}


// getAll(page: number = 1): Observable<IMovies> {
//   return this.httpClient.get<IMovies>(urls.movies, {params: {page}})
// }
