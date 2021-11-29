import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { City } from '../models/city';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private http: HttpClient) {}
  path1 = 'http://localhost:3000/cities';
  getCity(cityId: number): Observable<City> {
    const url = this.path1 + "/" + cityId;
    return this.http.get<City>(url).pipe(      
      catchError(this.handleError)
    )
  }
  path = 'http://localhost:3000/';
  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.path + 'cities').pipe(      
      catchError(this.handleError)
    )
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu' + err.error.message;
    } else {
      errorMessage = 'Sistemsel bir hata';
    }
    return throwError(errorMessage);
  }
}
