import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserDetails } from './UserDetails';
import { LoginComponent } from './login/login.component';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
    logid!:LoginComponent;
  constructor(private http:HttpClient , private route:Router) { }

  public loginUserFromRemote(user: User):Observable<any>{
 return this.http.post<any>("http://localhost:8008/login",user)
  }
// public fetchLoginId(ser:User):Observable<any>{
//   return this.http.get<any>("http://localhost:8008/login/"+'akshay@gmail.com');
// }

 public fetchUserDetailsById(id:number):Observable<any>{
    return this.http.get<any>("http://localhost:8080/getuserdetailsbyid/"+id);
 }


}
