import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
user =new User();
msg='';
myimage:string="assets/image/login.jpg";
public logId!:any;
  constructor(private service:RegistrationService,private _route:Router) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    }
    );
  }
  onLogin(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response recived")
      //  console.log(data.id);
       this.logId=data.id;
       console.log(this.logId);
    
    this._route.navigate(['/dashboard'])
    } ,
    error=>{
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

}
