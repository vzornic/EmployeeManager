import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { AppComponent } from './app.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeesComponent }
];
