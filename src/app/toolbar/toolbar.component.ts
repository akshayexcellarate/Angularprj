import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private api:RegistrationService , private route:Router) { }

  ngOnInit(): void {
  }
logOut(){
  this.api.global=false;
  console.log(this.api.global);
  console.log("logout");
  this.route.navigate(['']);
}
}
