import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Complaint} from "../models/complaint";
@Injectable({
  providedIn: 'root'
})

export class ComplaintService {
  readonly API_URL='http://localhost:8081';
  private complaintsUrl="http://localhost:8081/ShowAllComplaint";
  constructor(private _http:HttpClient) { }

  getComplaints() : Observable<Complaint[]>  {
    return this._http.get<Complaint[]>(this.complaintsUrl);
  }

  deleteComplaint(id:number){
    return this._http.delete("http://localhost:8081/deleteComplaint/"+id);
  }

  addComplaint(complaint:Complaint){
    return this._http.post("http://localhost:8081/addComplaint",complaint);
  }
  getComplaint(id:number){
    return this._http.get("http://localhost:8081/getOneComplaint/"+id);
  }
  getComplaintUser(id:number){

  }



}


