import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Complaint} from "../../../models/complaint";
import {FormControl, FormGroup} from "@angular/forms";
import {ComplaintService} from "../../../_services/complaint.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Expertinterview} from "../../../models/expertinterview";
import {ComplaintfileserviceService} from "../../../_services/complaintfileservice.service";

@Component({
  selector: 'app-admin-update-complaint',
  templateUrl: './admin-update-complaint.component.html',
  styleUrls: ['./admin-update-complaint.component.scss']
})
export class AdminUpdateComplaintComponent implements OnInit {
  id!:number;
  file!:File;
  imageSrc!: string;


  complaint!:Complaint;
  form = new FormGroup({
    description: new FormControl(),
    type : new FormControl()
  });
  isLoading = false;
  isSending = false;
  sent = false;
  @ViewChild('dialogRef', { static: true }) dialogRef!: TemplateRef<any>;

  constructor(private _fservice:ComplaintfileserviceService,private _cservice:ComplaintService,private route: ActivatedRoute, private _router:Router,private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.id =  Number(this.route.snapshot.paramMap.get("id"));
    console.log(this.id);
    this._cservice.getComplaint(this.id).subscribe((data) => {
      this.complaint = <Complaint>data;
      this.form.controls['description'].setValue(this.complaint.description);
      this.form.controls['type'].setValue(this.complaint.complaintType);
    })
  }

  onSubmit(){
    this.isSending = true;
    let dialog = this.dialog.open(this.dialogRef);
    this.complaint.description = this.form.value?.description?  this.form.value?.description : "";
    this.complaint.complaintType = this.form.value?.type?  this.form.value?.type : "";

    this._cservice.addComplaint(this.complaint).subscribe(      (res) => {console.log(res); this.isSending = false; this.sent = true; dialog.addPanelClass('success-dialog') ; },
      (err) => {console.log(err); this.isSending = false; this.sent = false; dialog.addPanelClass('fail-dialog') });
    this._router.navigateByUrl("admin/complaint/show");

  }

  uploadFile(){
    const formData = new FormData();
    formData.append('file', this.file);
    this._fservice.fileUpload(this.complaint.idComplaint, formData).subscribe(()=>{}, ()=>{}, ()=>{this._cservice.getComplaint(this.id).subscribe(
      (data) =>{this.complaint = <Complaint>data});
    });

  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
    }
    this.file = event.target.files[0];
  }

  deleteFile(idCourse: number, idFile: number){
    this._fservice.deleteFile(idCourse, idFile).subscribe(()=> {}, ()=>{alert("Failed to Delete File")}, ()=>{this._cservice.getComplaint(this.id).subscribe((data) =>{this.complaint = <Complaint>data});})
  }

}
