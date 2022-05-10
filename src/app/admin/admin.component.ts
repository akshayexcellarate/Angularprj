import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { Admin } from '../admin';
import { RegistrationService } from '../registration.service';
import { UserDetails } from '../UserDetails';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  us=new UserDetails();
 public id: any;
 admin!:any[];
 adminn=new Admin()
  constructor( private formbulder:FormBuilder,public api:RegistrationService) { }
   
  public userdetails:any={
    id:'',
    mob:'',
    prefix:'',
    firtsName:'',
    middleName:'',
    lastName:'',
    code:'',
    dob:'',
    mail:'',
    skill:'',
    doj:'',
    emptype:'',
    empstatus:'',
    dateofconf:'',
    company:'',
    bu:'',
    dept:'',
    desig:'',
    region:'',
    branch:'',
    reportmanager:'',
    funmanager:'',
    image:''
  };
  ngOnInit(): void {
  
    
    this.api.fetchAdminById(this.api.getData()).subscribe(
      data=>{
        this.adminn=data;
        console.log(this.adminn)
      },
      error=>{
        console.log("error");
      }
    )
  }
  logOut(): void{
    this.api.global=false
    console.log(this.api.global);
  // this.route.navigate([""])
  // console.log("main pge");
}
  onSubmit(data:any){
   console.log(data.value)
  }
  formatedDate:any
  formSubmit(){
   console.log(this.userdetails)
  //  this.api.addUserDetails(this.userdetails).subscribe(
  //    data=>{
  //     console.log(data);
  //    },
  //    (error)=>{
  //    console.log(error);
  //    alert("some error is occured")
  //    }
     
  //  );
  }
  
}
