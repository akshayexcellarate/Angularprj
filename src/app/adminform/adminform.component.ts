import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
// import { error } from 'console';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-adminform',
  templateUrl: './adminform.component.html',
  styleUrls: ['./adminform.component.css']
})
export class AdminformComponent implements OnInit {
public id=1;
  constructor( private formbulder:FormBuilder,public api:RegistrationService,private toast:NgToastService) { }

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
   this.api.addUserDetails(this.userdetails).subscribe(
     data=>{
      this.toast.success({detail:"Success Message",summary:"Record Added",duration:5000})
     },
     (error)=>{
     console.log(error);
     alert("some error is occured")
     }
     
   );
  }

}
