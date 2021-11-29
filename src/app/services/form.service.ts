import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Form } from '../models/form';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class FormService {
  constructor(private http: HttpClient) {}
  path: string = 'http://localhost:3000/forms';
  postForm(postData:Form):Observable<Form>{
    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'Token'
      })
    }
    return this.http.post<Form>(this.path,postData,httpOptions).pipe(      
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
