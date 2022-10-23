import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Expertinterview} from "../models/expertinterview";

@Injectable({
  providedIn: 'root'
})
export class ExpertinterviewService {

  readonly API_URL='http://localhost:8081';
  private complaintsUrl="http://localhost:8081/ShowAllExpertInterview";
  constructor(private _http:HttpClient) { }

  getInterviews() : Observable<Expertinterview[]>  {
    return this._http.get<Expertinterview []>(this.complaintsUrl);
  }

  getMyInterviews() : Observable<Expertinterview[]>  {
    return this._http.get<Expertinterview []>("http://localhost:8081/ShowMyExpertInterview");
  }

  deleteInterview(id:number){
    return this._http.delete("http://localhost:8081/deleteExpertInterview/"+id);
  }

  addInterview(expertinterview:Expertinterview){
    return this._http.post("http://localhost:8081/addExpertInterview",expertinterview);
  }

  updateInterview(expertinterview:Expertinterview){
    return this._http.post("http://localhost:8081/editinterview",expertinterview);
  }

  rateInterview(expertinterview:Expertinterview){
    return this._http.post("http://localhost:8081/rateinterview",expertinterview);
  }

  getInterview(id:number){
    return this._http.get("http://localhost:8081/getOneExpertInterview/"+id);
  }
  editInterview(expertinterview:Expertinterview){
    return this._http.put("http://localhost:8081/updateExpertInterview",expertinterview);
  }

}
