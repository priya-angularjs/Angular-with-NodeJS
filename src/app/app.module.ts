import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ParticlesModule } from 'angular-particle';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule, MatListModule, MatIconModule, MatTableModule, MatPaginatorModule, MatNativeDateModule, MatDatepickerModule,
  MatGridListModule, MatAutocompleteModule, MatDividerModule, MatDialogModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MediaMatcher} from '@angular/cdk/layout';
import { ChartsModule } from 'ng2-charts';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MenusComponent } from './menus/menus.component';
import { CalendarModule } from 'angular-calendar';

/* primeng Module */
import {DialogModule} from 'primeng/dialog';
import {DataTableModule} from 'primeng/datatable';
import {SlideMenuModule} from 'primeng/slidemenu';
import {CarouselModule} from 'primeng/carousel';


import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SchedulerModule} from './scheduler/scheduler.module';
import {ScheduleModule} from 'primeng/schedule';
import 'jquery'; import 'moment'; import 'fullcalendar';
import {MyHttpLogInterceptor} from './http.interceptor';
/* Services*/
import { APP_CONFIG, AppConfig } from './app.config';
import { AuthenticationService} from './service/authentication.service';
import { DepartmentService} from './service/department.service';
import { EmployeeService} from './service/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    ToolbarComponent,
    AddDepartmentComponent,
    BreadcrumbComponent,
    MenusComponent
  ],
  imports: [AppRoutingModule, HttpClientModule, BrowserModule, FormsModule, ReactiveFormsModule, RouterModule,
    ParticlesModule, BrowserAnimationsModule, ChartsModule, MatInputModule, MatFormFieldModule, MatCardModule,
    MatButtonModule, MatMenuModule, MatListModule, MatIconModule, MatTableModule, MatGridListModule, ScheduleModule,
    MatPaginatorModule, MatNativeDateModule, MatDatepickerModule, MatSidenavModule, MatToolbarModule, MatAutocompleteModule,
    MatSelectModule, MatDialogModule, DialogModule, DataTableModule,
    SlideMenuModule, CarouselModule, MatDividerModule,  CalendarModule.forRoot(), NgbModalModule.forRoot(), SchedulerModule
  ],
  providers: [MediaMatcher, { provide: APP_CONFIG, useValue: AppConfig }, AuthenticationService, DepartmentService, EmployeeService,
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpLogInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
