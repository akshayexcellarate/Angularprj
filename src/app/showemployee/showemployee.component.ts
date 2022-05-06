import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-showemployee',
  templateUrl: './showemployee.component.html',
  styleUrls: ['./showemployee.component.css']
})

export class ShowemployeeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'prefix','firtsName','middleName', 'lastName', 'code','empstatus','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api:RegistrationService) { }

  ngOnInit(): void {
  
      this.api.getUserDetails().subscribe(
        (data)=>{
          this.dataSource=new MatTableDataSource(data);
          this.dataSource.paginator=this.paginator
          this.dataSource.sort=this.sort
          console.log("received")
      
        },
        error=>{
          console.log("error")
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
editProduct(){

} 
deleteProduct(){

} 

}
