
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  url: string = 'https://golf-courses-api.herokuapp.com/courses/'

  getCourse(x: string): Observable<any[]> {
    return this.http.get<any[]>(this.url + x)
      // .pipe(
      //   tap((data) => {
      //   // console.log(data)
      // }
      //   ),
      //   catchError(this.handleError)
      // );
  }

  fakeCourse(x: string) {
    return this.url + x
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    // If clientside or network error occured...
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`
    } else { // If backend returned an unsuccessful response code, response body might give hint why...
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
    }

    console.error(errorMessage)
    return throwError(errorMessage) 
  }


}