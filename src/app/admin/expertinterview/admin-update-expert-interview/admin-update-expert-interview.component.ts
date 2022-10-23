import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Expertinterview} from "../../../models/expertinterview";
import {ExpertinterviewService} from "../../../_services/expertinterview.service";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin-update-expert-interview',
  templateUrl: './admin-update-expert-interview.component.html',
  styleUrls: ['./admin-update-expert-interview.component.scss']
})
export class AdminUpdateExpertInterviewComponent implements OnInit {

  id!:number;


  isLoading = false;
  isSending = false;
  sent = false;






  form = new FormGroup({
    date: new FormControl(),
    field : new FormControl(),
    type : new FormControl(),
    rating : new FormControl(),
    status : new FormControl()
  });
  expint!: Expertinterview;
  @ViewChild('dialogRef', { static: true }) dialogRef!: TemplateRef<any>;

  constructor(private _service : ExpertinterviewService,private dialog: MatDialog,  private route: ActivatedRoute,private _router:Router) { }
  openDialog() {
    let dialog = this.dialog.open(this.dialogRef);
  }

  ngOnInit() {
    this.id =  Number(this.route.snapshot.paramMap.get("id"));
    console.log(this.id);
    this._service.getInterview(this.id).subscribe((data) => {

        this.expint = <Expertinterview>data;

      this.form.controls['date'].setValue(this.expint.dateExpertInterview);
      this.form.controls['field'].setValue(this.expint.expertField);
      this.form.controls['type'].setValue(this.expint.interviewType);
      this.form.controls['rating'].setValue(this.expint.rating);
      this.form.controls['status'].setValue(this.expint.done);
    })

  }

  onSubmit(){
    this.isSending = true;
    let dialog = this.dialog.open(this.dialogRef);
    this.expint.dateExpertInterview = this.form.value?.date?  this.form.value?.date : new Date();
    this.expint.expertField = this.form.value?.field?  this.form.value?.field : "";
    this.expint.interviewType = this.form.value?.type?  this.form.value?.type : "";
    this.expint.rating = this.form.value?.rating?  this.form.value?.rating : "";
    this.expint.done = this.form.value?.status?  this.form.value?.status : "";

    this._service.updateInterview(this.expint).subscribe(      (res) => {console.log(res); this.isSending = false; this.sent = true; dialog.addPanelClass('success-dialog') ; },
      (err) => {console.log(err); this.isSending = false; this.sent = false; dialog.addPanelClass('fail-dialog') });
    this._router.navigateByUrl("admin/expertinterview/show");
  }

}
