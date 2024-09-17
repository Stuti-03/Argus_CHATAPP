import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './Views/login/login.component';
import { SignupComponent } from './Views/signup/signup/signup.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];
