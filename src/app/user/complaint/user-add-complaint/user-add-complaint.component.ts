import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Complaint} from "../../../models/complaint";
import {ComplaintService} from "../../../_services/complaint.service";
import {Router} from "@angular/router";
import {User} from "../../../models/User";
import {FormControl, FormGroup} from "@angular/forms";
import {Expertinterview} from "../../../models/expertinterview";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-user-add-complaint',
  templateUrl: './user-add-complaint.component.html',
  styleUrls: ['./user-add-complaint.component.scss']
})
export class UserAddComplaintComponent implements OnInit {
  complaint!:Complaint;
  form = new FormGroup({
    description: new FormControl(),
    type : new FormControl()
  });
  isLoading = false;
  isSending = false;
  sent = false;
  @ViewChild('dialogRef', { static: true }) dialogRef!: TemplateRef<any>;

  constructor(private _service:ComplaintService, private _router:Router,private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.isSending = true;
    let dialog = this.dialog.open(this.dialogRef);
    this.complaint = new Complaint();
    this.complaint.description = this.form.value?.description?  this.form.value?.description : "";
    this.complaint.complaintType = this.form.value?.type?  this.form.value?.type : "";

    this._service.addComplaint(this.complaint).subscribe(      (res) => {console.log(res); this.isSending = false; this.sent = true; dialog.addPanelClass('success-dialog') ; },
      (err) => {console.log(err); this.isSending = false; this.sent = false; dialog.addPanelClass('fail-dialog') });
    this._router.navigateByUrl("complaint/show");
  }

}
