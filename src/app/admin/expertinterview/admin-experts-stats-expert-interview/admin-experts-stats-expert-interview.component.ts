import { Component, OnInit } from '@angular/core';
import {Expertinterview} from "../../../models/expertinterview";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../_services/user.service";
import {User} from "../../../models/User";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-admin-experts-stats-expert-interview',
  templateUrl: './admin-experts-stats-expert-interview.component.html',
  styleUrls: ['./admin-experts-stats-expert-interview.component.scss']
})
export class AdminExpertsStatsExpertInterviewComponent implements OnInit {

  constructor(private route: ActivatedRoute,private _service : UserService) { }
  id!:number;
  user!:User[];
  dataSource = new MatTableDataSource<User>(this.user);
  columnsToDisplay = ['Total Rating'];

  ngOnInit(): void {
    this.id =  Number(this.route.snapshot.paramMap.get("id"));
    console.log(this.id);
    this._service.getBestExpertsRatings(this.id).subscribe((data) => {

      this.user = data;
      this.dataSource = new MatTableDataSource<User>(this.user);
    })
  }

}
