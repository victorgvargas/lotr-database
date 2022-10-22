import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  authToken = 'StIfJb3agY5Hiyvv_vxC';

  constructor(private http: HttpClient) { }

  getBook(): Observable<any> {
    return this.http.get('https://the-one-api.herokuapp.com/v1/book');
  }

  getMovie(): Observable<any> {
    return this.http.get('https://the-one-api.herokuapp.com/v1/movie', {
      headers : new HttpHeaders({
        Authorization: `Bearer ${this.authToken}`
      })
    });
  }

  getCharacter(): Observable<any> {
    return this.http.get('https://the-one-api.herokuapp.com/v1/character', {
      headers : new HttpHeaders({
        Authorization: `Bearer ${this.authToken}`
      })
    });
  }

  getQuote(): Observable<any> {
    return this.http.get('https://the-one-api.herokuapp.com/v1/quote', {
      headers : new HttpHeaders({
        Authorization: `Bearer ${this.authToken}`
      })
    });
  }

  getChapter(): Observable<any> {
    return this.http.get('https://the-one-api.herokuapp.com/v1/chapter', {
      headers : new HttpHeaders({
        Authorization: `Bearer ${this.authToken}`
      })
    });
  }
}
