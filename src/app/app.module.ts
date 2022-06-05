import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {Route, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import {MainInterceptor} from "./main.interceptor";

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { GenresComponent } from './components/genres/genres.component';
import { GenreComponent } from './components/genre/genre.component';
import { HeaderComponent } from './components/header/header.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PosterComponent } from './components/poster/poster.component';


const routes: Route[] = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'movies', pathMatch: 'full'},
      {path: 'movies', component: MoviesComponent},
      {path: 'movies/:id', component: MovieDetailsComponent},
      {path: ':genre', component: GenreComponent},
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    GenresComponent,
    GenreComponent,
    HeaderComponent,
    PosterComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
