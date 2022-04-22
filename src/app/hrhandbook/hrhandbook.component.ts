import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-hrhandbook',
  templateUrl: './hrhandbook.component.html',
  styleUrls: ['./hrhandbook.component.css']
})
export class HrhandbookComponent implements OnInit {
 id!:any
  constructor(private api:RegistrationService) { }

  ngOnInit(): void {
    this.id=this.api.getData();
  }

}
