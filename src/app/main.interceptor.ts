import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  private _token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2MzNDliZjI3MjZhMTE1N2Y1NzE0MDI1OGZiOTlmZSIsInN1YiI6IjYyOTM4YTcwZGY4NmE4MzRlMGFhNDYyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hOHNCwrF317G9pJv55XwADtAtovddpVeZdor3TKCevY'
  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this._token}`
      }
    })
    return next.handle(request)
  }
}
