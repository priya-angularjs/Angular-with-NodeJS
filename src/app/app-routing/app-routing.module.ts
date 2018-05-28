	import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { AddDepartmentComponent } from '../add-department/add-department.component';
import { ToolbarComponent} from '../toolbar/toolbar.component';
import { MenusComponent} from '../menus/menus.component';
import {SchedulerComponent} from '../scheduler/scheduler.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  {path: 'menus', component: MenusComponent},
  {path: 'home', component: ToolbarComponent,
  children:  [{ path: 'dashboard', component: DashboardComponent},
  {path: 'addEmployee', component: AddEmployeeComponent,  data: { breadcrumb: 'Add Employee', page: 'addEmployee'}},
  {path: 'employeeList', component: EmployeeListComponent,  data: { breadcrumb: 'View Employee',  page: 'employeeList'}},
  {path: 'addDepartment', component: AddDepartmentComponent,  data: { breadcrumb: 'Add Department',  page: 'addDepartment'}},
    {path: 'scheduler', component: SchedulerComponent,  data: { breadcrumb: 'Scheduler',  page: 'scheduler'}}],
  }
];


@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
