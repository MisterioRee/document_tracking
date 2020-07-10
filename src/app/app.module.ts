import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';


import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgxDropzoneModule } from 'ngx-dropzone';
import { AddDocumentComponent } from './documents/add-document/add-document.component';
import { ListDocumentComponent } from './documents/list-document/list-document.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { AddDepartmentComponent } from './employee/add-department/add-department.component';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'home', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'add-document', component: AddDocumentComponent },
      { path: 'list-document', component: ListDocumentComponent },
      { path: 'add-employee', component: AddEmployeeComponent },
      { path: 'add-department', component: AddDepartmentComponent },

    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LayoutComponent,
    AddDocumentComponent,
    ListDocumentComponent,
    AddEmployeeComponent,
    AddDepartmentComponent,
  ],
  imports: [
    BrowserModule,
    AppBreadcrumbModule,
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
    FormsModule,
    RouterModule.forRoot(routes),
    TabsModule.forRoot(),
    NgxDropzoneModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
