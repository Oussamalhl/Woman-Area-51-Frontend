import {Component, ViewChild, OnInit, TemplateRef} from '@angular/core';
import {ScheduleComponent,EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
//import { scheduleData } from './data.js';
import {debounceTime, finalize, map, Observable, startWith, switchMap, tap} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {Expertinterview} from "../../../models/expertinterview";
import {ExpertinterviewService} from "../../../_services/expertinterview.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";


@Component({
  selector: 'app-admin-expert-interview-add-component',
  templateUrl: './admin-expert-interview-add-component.component.html',
  styleUrls: ['./admin-expert-interview-add-component.component.scss'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  //template: `<ejs-schedule> </ejs-schedule>`
})
export class AdminExpertInterviewAddComponentComponent implements OnInit {



  form = new FormGroup({
    date: new FormControl(),
    field : new FormControl(),
    type : new FormControl(),
    rating : new FormControl()
  });
  isLoading = false;
  isSending = false;
  sent = false;
  expint!: Expertinterview;
  @ViewChild('dialogRef', { static: true }) dialogRef!: TemplateRef<any>;

  constructor(private _service : ExpertinterviewService,private dialog: MatDialog,private _router:Router) { }
  openDialog() {
    let dialog = this.dialog.open(this.dialogRef);
  }

  ngOnInit() {

  }



  onSubmit(){
    this.isSending = true;
    let dialog = this.dialog.open(this.dialogRef);
    this.expint = new Expertinterview();
    this.expint.dateExpertInterview = this.form.value?.date?  this.form.value?.date : new Date();
    this.expint.expertField = this.form.value?.field?  this.form.value?.field : "";
    this.expint.interviewType = this.form.value?.type?  this.form.value?.type : "";
    this.expint.rating = this.form.value?.rating?  this.form.value?.rating : "";

    this._service.addInterview(this.expint).subscribe(      (res) => {console.log(res); this.isSending = false; this.sent = true; dialog.addPanelClass('success-dialog') ; },
      (err) => {console.log(err); this.isSending = false; this.sent = false; dialog.addPanelClass('fail-dialog') });
    this._router.navigateByUrl("admin/expertinterview/show");
  }



}
