import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../models/User";
import {Expertinterview} from "../models/expertinterview";
const API_URL = 'http://localhost:8081/api/test/';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  getBestExperts() : Observable<User[]>  {
    return this.http.get<User []>("http://localhost:8081/getBestExperts/");
  }
  getBestExpertsRatings(id:number):Observable<User[]>{
    return this.http.get<User []>("http://localhost:8081/getBestExpertsRatings/"+id);
  }
}
