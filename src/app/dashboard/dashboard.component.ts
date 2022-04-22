import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../UserDetails';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   id!:any
   us=new UserDetails();
   getid!:any;
   user=new User();
   userName!:any
   
  constructor(private route:Router,private api:RegistrationService  ) { }

  ngOnInit(): void {
   this.id=this.api.getData()
   console.log(this.user.emailId);

   this.api.fetchUserLoginDetailById(this.id).subscribe(
    data=>{
      console.log("response recived")
     this.userName=data.userName;
  
  } ,
  error=>{
    console.log("exception occured")
    
    
}
  )
  }


  
  logOut(){
      
    this.route.navigate([""])
    console.log("main pge");

  }
}
