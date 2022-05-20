import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { UserDetails } from '../UserDetails';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  user = new UserDetails();
  constructor(public api:RegistrationService) { }
   
  ngOnInit(): void {
    this.api.fetchUserDetailsById(this.api.update).subscribe(
      (data)=>{
        console.log(data);
        this.user=data;
        // console.log(data);
      },
      (error)=>{
        console.log("error");
      }
    )
  }
  editProduct() {
    
  
   }
   formSubmit(){
     console.log(this.user);
     this.api.updateUser(this.user).subscribe(
       (data)=>{
         console.log("updated");
       },
       (error)=>{
         console.log("error");
       }
     )
   }
}
