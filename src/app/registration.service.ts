import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserDetails } from './UserDetails';
import { LoginComponent } from './login/login.component';
import { Admin } from './admin';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  global: any;

  user!: UserDetails;
  id!: any;
  Holi!: any;
  constructor(private http: HttpClient, private route: Router) {}

  setData(idd: any) {
    this.id = idd;
  }
  getData() {
    return this.id;
  }

  setHoliday(holi: any) {
    this.Holi = holi;
  }
  getHoliday() {
    return this.Holi;
  }
  public loginUserFromRemote(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:8008/login', user);
  }
  loginUser(token: string) {
    localStorage.setItem('token', token);
    console.log(token);
    return true;
  }
  // public fetchLoginId(ser:User):Observable<any>{
  //   return this.http.get<any>("http://localhost:8008/login/"+'akshay@gmail.com');
  // }

  public fetchUserDetailsById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/getuserdetailsbyid/${id}`);
  }

  public fetchUserLoginDetailById(id: any): Observable<any> {
    return this.http.get<any>(`http://localhost:8008/login/${id}`);
  }
  public fetchBdayUser(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/getuserdetailsbydate`);
  }
  public addUserDetails(userde: UserDetails): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/adduserdetails`, userde);
  }
  public getUserDetails(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/getuserdetails`);
  }
  public fetchLogById(admin: Admin): Observable<any> {
    return this.http.post<any>('http://localhost:8888/admin', admin);
  }
  public fetchAdminById(id: any): Observable<any> {
    return this.http.get<any>(`http://localhost:8888/admin/${id}`);
  }
  public deleteByUserId(id: any): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/deleteuserbyid/${id}`);
  }
  public updateUser(userde: UserDetails): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/adduserdetails`, userde);
  }
}
