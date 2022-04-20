import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from'@angular/material/input';
import{MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import { InboxComponent } from './inbox/inbox.component';
import { HomeComponent } from './home/home.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RequestComponent } from './request/request.component';
import { NotificationComponent } from './notification/notification.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HolidaycalenderComponent } from './holidaycalender/holidaycalender.component';
import { ClearanceComponent } from './clearance/clearance.component';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { LetterComponent } from './letter/letter.component';
import { HrhandbookComponent } from './hrhandbook/hrhandbook.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { RegistrationService } from './registration.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    InboxComponent,
    HomeComponent,
    UserprofileComponent,
    ToolbarComponent,
    RequestComponent,
    NotificationComponent,
    HolidaycalenderComponent,
    ClearanceComponent,
    LetterComponent,
    HrhandbookComponent,
    AttendenceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatTooltipModule,
    MatTableModule,
    MatTabsModule,
    MatSelectModule
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
