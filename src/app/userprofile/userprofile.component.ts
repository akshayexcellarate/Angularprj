import { Component, OnInit,Input } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { UserDetails } from '../UserDetails';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
@Input() ddata:any
  productForm!:FormGroup;
  userlist!:UserDetails[];
  user= new UserDetails();
  id!:any;
  pass!:any
  
  constructor(private formBuilder:FormBuilder,private api:RegistrationService, private route:Router,private activate:ActivatedRoute) { }

  ngOnInit(): void {
this.id=(this.activate.snapshot.paramMap.get('id'));
// this.id=this.log.logId;

 this.api.fetchUserDetailsById(this.id).subscribe(
   data=>{
         console.log("data occured");
          // console.log(this.login.logId);
        // this.id=this.api.getData()
        // console.log(this.id);
          this.user=data; 
        console.log(this.user);
        this.pass=this.user.id
        this.api.setHoliday(this.pass)
        
   },
   error=> console.log("Exception occured")
 )
  
    this.productForm=this.formBuilder.group({
      prefix:['',Validators.required],
      firtsName:['',Validators.required],
      middleName:['',Validators.required],
      lastName:['',Validators.required],
      code:['',Validators.required],
      dob:['',Validators.required],
      mail:['',Validators.required],
      mob:['',Validators.required],
      skill:['',Validators.required],
      doj:['',Validators.required],
      emptype:['',Validators.required],
      empstatus:['',Validators.required],
      dateofconf:['',Validators.required],
      company:['',Validators.required],
      bu:['',Validators.required],
      dept:['',Validators.required],
      desig:['',Validators.required],
      region:['',Validators.required],
      branch:['',Validators.required],
      reportmanager:['',Validators.required],
      funmanager:['',Validators.required],
      image:['',Validators.required]
    })
  }

}
