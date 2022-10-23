import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Expertinterview} from "../../../models/expertinterview";
import {ActivatedRoute} from "@angular/router";
import {ExpertinterviewService} from "../../../_services/expertinterview.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-rate-expert-interview',
  templateUrl: './admin-rate-expert-interview.component.html',
  styleUrls: ['./admin-rate-expert-interview.component.scss']
})
export class AdminRateExpertInterviewComponent implements OnInit {
  currentRate: any;
  id!:number;
  expint!: Expertinterview;
  isLoading = false;
  isSending = false;
  sent = false;
  @ViewChild('dialogRef', { static: true }) dialogRef!: TemplateRef<any>;

  form = new FormGroup({
    rating: new FormControl(),
    ratingText : new FormControl(),
    date: new FormControl(),
    field : new FormControl(),
    type : new FormControl()
  });

  constructor(private fb: FormBuilder,private route: ActivatedRoute,private _service : ExpertinterviewService,private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.id =  Number(this.route.snapshot.paramMap.get("id"));
    console.log(this.id);
    this._service.getInterview(this.id).subscribe((data) => {

      this.expint = <Expertinterview>data;
      this.form.controls['rating'].setValue(this.expint.rating);
      this.form.controls['ratingText'].setValue(this.expint.ratingText);
      this.form.controls['date'].setValue(this.expint.dateExpertInterview);
      this.form.controls['field'].setValue(this.expint.expertField);
      this.form.controls['type'].setValue(this.expint.interviewType);

    })

  }

  onSubmit(){
    this.isSending = true;
    let dialog = this.dialog.open(this.dialogRef);
    this.expint.rating = this.form.value?.rating?  this.form.value?.rating : "";
    this.expint.ratingText = this.form.value?.ratingText?  this.form.value?.ratingText : "";
    this.expint.dateExpertInterview = this.form.value?.date?  this.form.value?.date : new Date();
    this.expint.expertField = this.form.value?.field?  this.form.value?.field : "";
    this.expint.interviewType = this.form.value?.type?  this.form.value?.type : "";

    this._service.rateInterview(this.expint).subscribe(      (res) => {console.log(res); this.isSending = false; this.sent = true; dialog.addPanelClass('success-dialog') ; },
      (err) => {console.log(err), this.isSending = false; this.sent = false; dialog.addPanelClass('fail-dialog') });
  }


}
