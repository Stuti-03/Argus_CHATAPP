import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './Views/login/login.component';
import { LayoutComponent } from './Views/layout/layout.component';

export const routes: Routes = [
    {
      path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: '',
      component: LayoutComponent,
      children:[
        {
          path: 'dashboard',
          component: DashboardComponent
        }
      ]
    },
];
