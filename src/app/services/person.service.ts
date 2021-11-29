import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Person } from '../models/person';

@Injectable()
export class PersonService {

  constructor(private http:HttpClient) { }  

  path="http://localhost:3000/people"  
  getPerson(personId:number):Observable<Person>{
    return this.http.get<Person>(this.path + "/" + personId).pipe(
      catchError(this.handleError)
    )
  }
  getPeople():Observable<Person[]>{
    return this.http.get<Person[]>(this.path).pipe(
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
