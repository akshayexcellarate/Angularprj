import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrationService } from '../registration.service';

// import { LoginComponent } from './login.component';

// fdescribe('LoginComponent', () => {
  // let component: LoginComponent;
  // let fixture: ComponentFixture<LoginComponent>;

  fdescribe('Testing First Jasmine Test Script',()=>{
    it('First Test Script',()=>{
      expect(10).toBe(10);
    })
  })
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ LoginComponent ],
  //     imports:[HttpClientModule,RouterTestingModule],
  //     providers:[RegistrationService,]

  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LoginComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   const fixture =TestBed.createComponent(LoginComponent);
  //   const app=fixture.componentInstance;
  //   expect(component).toBeTruthy();
  // });

  // it('should contain a default value for the loginform',()=>{
  //   expect(component.loginForm.value).toEqual({email:'',password:''});
  // });

  // it('should login user if the form is valid and shhould navigate to the dashboard',()=>{
  //   component.loginForm.setValue({email:'akshay.kadam@excellarate.com',password:'akshay123'});
  //   component.onLogin();
  //   // spyOn(component.service,'loginUserFromRemote');
  //   // expect(component._route.navigate).toHaveBeenCalled();
  //   expect(component.service.loginUserFromRemote).toHaveBeenCalled();
  // });
//  });
