import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RegistrationService } from '../registration.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-showemployee',
  templateUrl: './showemployee.component.html',
  styleUrls: ['./showemployee.component.css'],
})
export class ShowemployeeComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'prefix',
    'firtsName',
    'middleName',
    'lastName',
    'code',
    'empstatus',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private api: RegistrationService,
    private change: ChangeDetectorRef,
    public dialog: MatDialog,
    private formbulder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.api.getUserDetails().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.change.detectChanges();
        console.log('received');
      },
      (error) => {
        console.log('error');
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editProduct(id: any) {
    const dialog = this.dialog.open(UpdateComponent);
    //  console.log(id);

    this.api.update = id;
  }
  deleteProduct(id: any) {
    // console.log(id);
    this.api.deleteByUserId(id).subscribe(
      (data) => {
        console.log('Deleted');
        this.api.getUserDetails();
      },
      (error) => {
        console.log('not deleted');
        this.api.getUserDetails();
      }
    );
    //  this.api.deleteByUserId(id)
    //  .subscribe({
    //    next:(res)=>{
    //     //  console.log(id);
    //      console.log("deleted");
    //      this.api.getUserDetails();
    //    },
    //    error:()=>{
    //      console.log("not deleted");
    //    }
    //  })
  }
}
