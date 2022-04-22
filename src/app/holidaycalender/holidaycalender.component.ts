import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserDetails } from '../UserDetails';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-holidaycalender',
  templateUrl: './holidaycalender.component.html',
  styleUrls: ['./holidaycalender.component.css']
})
export class HolidaycalenderComponent implements OnInit {
   id!:any
   user=new UserDetails();
  constructor(private api:RegistrationService,private activate:ActivatedRoute , private _location:Location) { }
  backClicked(){
    this._location.back();
  }
  ngOnInit(): void {
  //  this.id=this.api.getData()
  //  console.log(this.id);
  console.log(this.api.getData());
  
  }

}
