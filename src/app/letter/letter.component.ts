import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {

  constructor(private _location:Location) { }
  backClicked(){
    this._location.back();
  }
  ngOnInit(): void {

  }

}
