import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Admin } from '../admin';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginForm!: FormGroup;
  public logId!:any;
  msg='';
  hide=true;
  admin =new Admin();
  constructor(public service:RegistrationService,public _route:Router) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    }
    );
  }
  onLogin(){
    this.service.fetchLogById(this.admin).subscribe(
      data=>{
        console.log("response recived")
        this.service.global=true;
       console.log(data.id);
      console.log(this.service.global);
       this.logId=data.id;
        console.log(this.logId);
       this.service.setData(this.logId)
       localStorage.setItem('token',data.emailId)
    this._route.navigate(['/admin/form'])
    } ,
    error=>{
      console.log(this.service.global);
      console.log("exception occured")
      this.msg="*Bad credentials, please enter valid email id and password"; 
  }
    )
  }

}
