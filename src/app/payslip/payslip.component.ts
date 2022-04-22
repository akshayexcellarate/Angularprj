import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {
id!:any
  constructor(private api:RegistrationService) { }

  ngOnInit(): void {
    this.id=this.api.getData();
  }

}
