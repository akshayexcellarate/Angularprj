import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { UserDetails } from '../UserDetails';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
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
   
  constructor(private route:Router,private api:RegistrationService ) { }

  ngOnInit(): void {
   this.id=this.api.getData()
   
  }
  
  logOut(){
      
    this.route.navigate([""])
    console.log("main pge");

  }
}
