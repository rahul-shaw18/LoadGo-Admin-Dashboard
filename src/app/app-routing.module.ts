import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Core/home/home.component';
import { AuthenticationComponent } from './Feature/authentication/authentication.component';
import { DashboardComponent } from './Core/dashboard/dashboard.component';
import { RidersComponent } from './Core/riders/riders.component';
import { ProfileComponent } from './Core/navbar/NavbarComponent/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  // authentication component
  { path: 'authentication', component: AuthenticationComponent },

  // sideNavBar Component
  { path: 'dashboard', component: DashboardComponent },
  { path: 'riders', component: RidersComponent },

  // navbar component
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
