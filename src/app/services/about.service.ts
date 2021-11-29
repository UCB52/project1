import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Certificate } from '../models/certificate';
import { Skill } from '../models/skill';

@Injectable()
export class AboutService {

  constructor(private http:HttpClient) { }
  getSkill():Observable<Skill[]>{
    return this.http.get<Skill[]>("http://localhost:3000/skills").pipe(
      catchError(this.handleError)
    )
  }
  getCertificate():Observable<Certificate[]>{
    return this.http.get<Certificate[]>("http://localhost:3000/certificates").pipe(
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
