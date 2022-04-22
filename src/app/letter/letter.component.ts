import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {
id!:any
  constructor(private api:RegistrationService) { }

  ngOnInit(): void {
    this.id=this.api.getData()
    console.log(this.id);
  }

}
