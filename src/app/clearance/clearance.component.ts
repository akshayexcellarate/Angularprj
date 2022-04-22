import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-clearance',
  templateUrl: './clearance.component.html',
  styleUrls: ['./clearance.component.css']
})
export class ClearanceComponent implements OnInit {

  constructor(private _location:Location) { }
  backClicked(){
    this._location.back();
  }
  ngOnInit(): void {
  }

}
