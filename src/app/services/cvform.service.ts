import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cvform } from '../models/cvform';

@Injectable()
export class CvformService {

  constructor(private http:HttpClient) { }
  path:string= 'http://localhost:3000/cvforms'
  postcvForm(postData:Cvform):Observable<Cvform>{
    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'Token'
      })
    }
    return this.http.post<Cvform>(this.path,postData,httpOptions).pipe(
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
