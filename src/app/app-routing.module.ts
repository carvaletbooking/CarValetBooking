import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent, 
    ...canActivate(() => redirectLoggedInTo(['']))
  },
  { 
    path: '', 
    component: DashboardComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
