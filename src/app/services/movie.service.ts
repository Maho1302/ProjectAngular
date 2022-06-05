import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../constants";
import {IGenres, IMovie, IPage} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }


  getAll(page: number = 1): Observable<IPage> {
    return this.httpClient.get<IPage>(urls.movies, {params: {page}})
  }

  getById(id: string): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${urls.movie}/${id}`)
  }

  getGenre(): Observable<IGenres> {
    return this.httpClient.get<IGenres>(urls.genres)
  }

  sortGenre(id: number,page: number = 1): Observable<IPage> {
    return this.httpClient.get<IPage>(`${urls.movies}?with_genres=${id}`, {params: {page}})
  }

}

