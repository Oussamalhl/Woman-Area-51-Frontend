import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Expertinterview} from "../../../models/expertinterview";
import {ExpertinterviewService} from "../../../_services/expertinterview.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-show-expert-interview',
  templateUrl: './admin-show-expert-interview.component.html',
  styleUrls: ['./admin-show-expert-interview.component.scss']
})
export class AdminShowExpertInterviewComponent implements OnInit {

  listInterviews:Expertinterview[]=[];
  dataSource = new MatTableDataSource<Expertinterview>(this.listInterviews);
  rating3:number
  public form: FormGroup;

  columnsToDisplay = ['user', 'dateexpertinterview','eexpertfield','interviewtype','rating','rateit','expert','Remove','Update'];
  expint!:Expertinterview;

  constructor(private _service:ExpertinterviewService,private _liveAnnouncer: LiveAnnouncer,private fb: FormBuilder) {
    this.rating3 = 0;
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
  }
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this._service.getInterviews().subscribe(res=>{
      console.log(res);
      this.listInterviews=res;
      this.dataSource = new MatTableDataSource<Expertinterview>(this.listInterviews);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  reload() {
    this._service.getInterviews().subscribe(res => {
      console.log(res);
      this.listInterviews = res;
      this.dataSource = new MatTableDataSource<Expertinterview>(this.listInterviews);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;


    });
  }
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  deleteInterview(id:number){
    this._service.deleteInterview(id).subscribe(()=>console.log("Event Deleted"));
    this.reload();
  }

}
