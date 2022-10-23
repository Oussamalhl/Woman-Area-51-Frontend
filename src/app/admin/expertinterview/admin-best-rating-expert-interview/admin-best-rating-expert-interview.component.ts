import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {User} from "../../../models/User";
import {MatSort, Sort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {UserService} from "../../../_services/user.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";

@Component({
  selector: 'app-admin-best-rating-expert-interview',
  templateUrl: './admin-best-rating-expert-interview.component.html',
  styleUrls: ['./admin-best-rating-expert-interview.component.scss']
})
export class AdminBestRatingExpertInterviewComponent implements OnInit {

  listU:User[]=[];
  dataSource = new MatTableDataSource<User>(this.listU);

  columnsToDisplay = ['firstname', 'lastname'];
  user!:User;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _service:UserService,private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this._service.getBestExperts().subscribe(res=>{
      console.log(res);
      this.listU=res;
      this.dataSource = new MatTableDataSource<User>(this.listU);
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
  }


