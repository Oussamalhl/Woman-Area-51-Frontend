import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Expertinterview} from "../../../models/expertinterview";
import {ComplaintService} from "../../../_services/complaint.service";
import {Router} from "@angular/router";
import {ExpertinterviewService} from "../../../_services/expertinterview.service";
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-user-add-expert-interview',
  templateUrl: './user-add-expert-interview.component.html',
  styleUrls: ['./user-add-expert-interview.component.scss']
})
export class UserAddExpertInterviewComponent implements OnInit {
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

  constructor(private _service : ExpertinterviewService,private dialog: MatDialog,private _router: Router) { }
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
    this._router.navigateByUrl("/expertinterview/show");
  }

}
