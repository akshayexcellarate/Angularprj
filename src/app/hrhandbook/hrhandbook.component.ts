import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Location, NgIf } from '@angular/common';
@Component({
  selector: 'app-hrhandbook',
  templateUrl: './hrhandbook.component.html',
  styleUrls: ['./hrhandbook.component.css']
})
export class HrhandbookComponent implements OnInit {
 id!:any
  constructor(public api:RegistrationService, private _location:Location) { }
  backClicked(){
  this._location.back();
  }
  ngOnInit(): void {
    this.id=this.api.getData();
  }

}
