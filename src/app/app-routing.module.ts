import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { InboxComponent } from './inbox/inbox.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RequestComponent } from './request/request.component';
import { ClearanceComponent } from './clearance/clearance.component';
import { HolidaycalenderComponent } from './holidaycalender/holidaycalender.component';

const routes: Routes = [
 {
   path: '',
   component:AppComponent,
   children:[
     {
       path:'',
       component:LoginComponent
     },
     {
       path:'dashboard',
       component:DashboardComponent
     },
     {
       path:'inbox',
       component:InboxComponent
     },
     {
      path:'request',
      component:RequestComponent
    },
     {
      path:'userprofile/:id',
      component:UserprofileComponent
    },
    {
      path:'Clearance',
      component:ClearanceComponent
    },
    {
      path:'userprofile',
      component:UserprofileComponent
    },
    {
      path:'Holiday',
      component:HolidaycalenderComponent
    }

   
   ]
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
