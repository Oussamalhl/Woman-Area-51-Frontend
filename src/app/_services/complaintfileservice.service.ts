import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Complaint} from "../models/complaint";

@Injectable({
  providedIn: 'root'
})
export class ComplaintfileserviceService {

  constructor(private http: HttpClient) { }
  fileUpload(idComplaint: number, form: FormData){
    return this.http.post('http://localhost:8081/Complaint/'+idComplaint+'/addFile',form);
  }
  deleteFile(idCourse: number, idFile: number){
    return this.http.delete("http://localhost:8081");
  }
}
