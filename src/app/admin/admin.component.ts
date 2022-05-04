import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { UserDetails } from '../UserDetails';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  us=new UserDetails();
 
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
