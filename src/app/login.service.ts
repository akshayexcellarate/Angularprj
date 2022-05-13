import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  credentials={
    "username":"akshay.kadam@excellarate.com", 
    "password":"akshay@123"
  }


  constructor(private http:HttpClient) { }

  doLogin(){
    return this.http.post("http://localhost:8008/token",this.credentials)
  }

loginUser(token: string)
{
  localStorage.setItem("token",token)
  return true;
}
isLoggedIn()
{
 let token= localStorage.getItem("token");
if(token==undefined || token===''||token==null)
{
  return false;
}else{
  return true;
}
}
logOut(){
  localStorage.removeItem('token');
  return true;
}
getToken()
{
  return localStorage.getItem('token');
}
}
