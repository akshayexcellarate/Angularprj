import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { UserDetails } from '../UserDetails';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   logid!:LoginComponent;
   us=new UserDetails();
  constructor(private route:Router ) { }

  ngOnInit(): void {
  }
  logOut(){
   
    this.route.navigate([""])
    console.log("main pge");

  }
}
