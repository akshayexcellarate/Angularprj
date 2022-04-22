import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {
  events:any=[
    {title:'P',date:'2022-04-21', color:'lightgreen'}
  ];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
   events:this.events
  };

 
  constructor() { }

  ngOnInit(): void {
  }

}
