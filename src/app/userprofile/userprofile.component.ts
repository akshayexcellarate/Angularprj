import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  productForm!:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.productForm=this.formBuilder.group({
      firstName:['',Validators.required],
      middleName:['',Validators.required],
      lastName:['',Validators.required],
      birthDate:['',Validators.required]
    })
  }

}
