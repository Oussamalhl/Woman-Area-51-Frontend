import {Component, OnInit, ViewChild} from '@angular/core';
import {Complaint} from "../../../models/complaint";
import {ComplaintService} from "../../../_services/complaint.service";
import {MatTableDataSource} from "@angular/material/table";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-admin-complaint-show',
  templateUrl: './admin-complaint-show.component.html',
  styleUrls: ['./admin-complaint-show.component.scss']
})
export class AdminComplaintShowComponent implements OnInit {
  listComplaints:Complaint[]=[];
  dataSource = new MatTableDataSource<Complaint>(this.listComplaints);

  columnsToDisplay = ['description', 'complainttype','Remove','Edit'];
  comp!:Complaint;


  constructor(private _service:ComplaintService,private _liveAnnouncer: LiveAnnouncer) { }
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this._service.getComplaints().subscribe(res=>{
      console.log(res);
      this.listComplaints=res;
      this.dataSource = new MatTableDataSource<Complaint>(this.listComplaints);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  deleteComplaint(id:number){
    this._service.deleteComplaint(id).subscribe(()=>alert("complaint deleted"));
  }

}
