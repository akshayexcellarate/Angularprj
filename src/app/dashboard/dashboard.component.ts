import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserDetails } from '../UserDetails';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Location } from '@angular/common';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker/calendar-body';
import { MatCalendarHeader } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { QrcodeComponent } from '../qrcode/qrcode.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bdayName1!:any
  bdayName2!:any
  bdayName3!:any
  bdayLastName1!:any
  bdayLastName2!:any
  bdayLastName3!:any
  shorFirst1!:any
  shorFirst2!:any
  shorFirst3!:any
  shortSecond1!:any
  shortSecond2!:any
  shortSecond3!:any
  bu1!:any
  bu2!:any
  bu3!:any
  bdayBranch1!:any
  bdayBranch2!:any
  bdayBranch3!:any
  imag1!:Blob
  imag2!:Blob
  imag3!:Blob
  id!:any
   userr=new UserDetails();
  us=new UserDetails();
  getid!:any;
  user=new User();
  userName!:any
 events: any;
  selectedDate: any;
 onSelect(event: any){
  console.log(event);
  this.selectedDate= event;
  
}   

  constructor(private route:Router,public api:RegistrationService) { }
 
 
  ngOnInit(): void {
   this.id=this.api.getData()
   console.log(this.user.emailId);
   this.api.fetchUserLoginDetailById(this.id).subscribe(
    data=>{
      console.log("response received");
     this.userName=data.userName;
  } ,
  error=>{
    console.log("exception occured");
    
}
  )
   this.api.fetchBdayUser().subscribe(
     bday=>{
       console.log("bday response received");
        this.bdayName1=bday[0].firtsName;
        this.bdayLastName1=bday[0].lastName;
        this.bdayBranch1=bday[0].branch;
        this.bu1=bday[0].bu;
        this.imag1=bday[0].image;
        this.shorFirst1=this.bdayName1.substr(0,1).toUpperCase();
        this.shortSecond1=this.bdayLastName1.substr(0,1).toUpperCase();
        this.bdayName2=bday[1].firtsName;
        this.bdayLastName2=bday[1].lastName;
        this.bdayBranch2=bday[1].branch;
        this.bu2=bday[1].bu;
        this.imag2=bday[1].image
        this.shorFirst2=this.bdayName2.substr(0,1).toUpperCase();
        this.shortSecond2=this.bdayLastName2.substr(0,1).toUpperCase();
        this.bdayName3=bday[2].firtsName;
        this.bdayLastName3=bday[2].lastName;
        this.bdayBranch3=bday[2].branch;
        this.bu3=bday[2].bu;
        this.imag3=bday[2].image
        this.shorFirst3=this.bdayName3.substr(0,1).toUpperCase();
        this.shortSecond3=this.bdayLastName3.substr(0,1).toUpperCase();
        this.userr=bday;
        // console.log(this.userr);
     },
     error=>{
       console.log("bday not found");
     }
     
   )
  
  }
  logOut(): void{
      this.api.global=false
      console.log(this.api.global);
    // this.route.navigate([""])
    // console.log("main pge");
  }
  travel(){
    this.route.navigate(['inbox']);
   }
   attendence(){
    this.route.navigate(['Attendence']);
   }
}
