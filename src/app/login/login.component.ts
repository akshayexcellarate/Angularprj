import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide=true;
  loginForm!: FormGroup;
user =new User();
msg='';
myimage:string="assets/image/login.jpg";
public logId!:any;
  constructor(public service:RegistrationService,public _route:Router) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    }
    );
  }

  // onLogin(){
  //   this.loginService.doLogin().subscribe(
  //     response=>{
  //        console.log("recieved");
  //     },
  //     error=>{
  //        console.log("error");
  //     }
  //   )
  // }
  onLogin(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data=>{
        console.log(this.service.loginUser)
        console.log("response recived")
        this.service.global=true;
      //  console.log(data.id);
      console.log(this.service.global);
       this.logId=data.id;
        console.log(this.logId);
       this.service.setData(this.logId)
       localStorage.setItem('token',data.emailId)
    this._route.navigate(['/dashboard'])
    } ,
    error=>{
      console.log(this.service.global);
      console.log("exception occured")
      this.msg="*Bad credentials, please enter valid email id and password";
      
  }
    )

    // this.service.fetchLoginId(this.user).subscribe(
    //   data=>{
    //     console.log("");
    //   },
    //   error=>{
    //     console.log("error");
    //   }
    // )
  }
dd=this.logId
}
