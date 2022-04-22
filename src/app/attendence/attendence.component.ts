import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { RegistrationService } from '../registration.service';
import { Location } from '@angular/common';
import { User } from '../user';
import { style } from '@angular/animations';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {
  events:any=[
    {title:'P',date:'2022-04-21', color:'lightgreen'},
    {title:'P',date:'2022-04-22', color:'lightgreen'} 
  ];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
   events:this.events
  };

 
  constructor(private api:RegistrationService,private _location:Location) { }
  backClicked(){
    this._location.back();
  }
  ngOnInit(): void {
  
  }

}
