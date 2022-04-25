import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private api:RegistrationService) { }

  ngOnInit(): void {
  }
logOut(){
  this.api.global=false
  console.log(this.api.global);
  console.log("logout");
}
}
