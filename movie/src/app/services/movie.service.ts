import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:8080/Movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  readAll():
    Observable<any> {
    console.log("readAll():");
    let movies = this.httpClient.get(`${baseURL}/` )
    console.log("movies:" + JSON.stringify(movies));
    return movies;
  }

  read(id : any): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(`${baseURL}/`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }
}
