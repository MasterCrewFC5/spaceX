import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiError } from '../interfaces/api-error';
import { Observable, throwError } from 'rxjs/index';
import { catchError } from 'rxjs/operators';

const errorsListeners: Function[] = [];

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {

  private static baseUrl = 'https://api.spacexdata.com/v2/';

  constructor(private httpClient: HttpClient) {
  }

  public addErrorListener(func: Function) {
    errorsListeners.push(func);
  }

  private handleError(error: HttpErrorResponse) {
    const apiError: ApiError = {
      hasError: true,
      error,
      message: `Server returned error code ${error.status}`
    };

    if (error.error instanceof ErrorEvent) {
      apiError.message = error.error.message;
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    errorsListeners.forEach((func: Function) => func(apiError));

    return throwError('Something bad happened; Please try again later.');
  }

  private getOptions(options?: any) {
    let httpParams = new HttpParams();
    const httpHeaders = new HttpHeaders();
    if (options && options.params) {
      for (const key in options.params) {
        if (options.params.hasOwnProperty(key)) {
          httpParams = httpParams.append(key, options.params[key]);
        }
      }
    }
    httpHeaders.append('Content-Type', 'application/json');
    if(options && options.headers) {
      for (const key in options.headers) {
        if(options.headers.hasOwnProperty(key)){
          httpHeaders.append(key, options.headers[key]);
        }
      }
    }
    return {
      headers: httpHeaders,
      params: httpParams
    };
  }

  get(route: string, options?: any): Observable<any> {
    options = this.getOptions(options);
    return this.httpClient
      .get(`${SpacexApiService.baseUrl}${route}`, options)
      .pipe(catchError(this.handleError));
  }
}
