import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Core/home/home.component';
import { AuthenticationComponent } from './Feature/authentication/authentication.component';
import { DashboardComponent } from './Core/dashboard/dashboard.component';
import { RidersComponent } from './Core/riders/riders.component';
import { ProfileComponent } from './Core/navbar/NavbarComponent/profile/profile.component';
import { RidesComponent } from './Core/rides/rides.component';
import { DriversComponent } from './Core/drivers/drivers.component';
import { VehicleComponent } from './Core/vehicle/vehicle.component';
import { EarningReportsComponent } from './Core/earning-reports/earning-reports.component';
import { StatementComponent } from './Core/statement/statement.component';
import { ReviewRatingComponent } from './Core/review-rating/review-rating.component';
import { PagesComponent } from './Core/pages/pages.component';
import { ChangePasswordComponent } from './Core/navbar/NavbarComponent/change-password/change-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  // authentication component
  { path: 'authentication', component: AuthenticationComponent },

  {
    path: '',
    component: HomeComponent,

    children: [
      // sideNavBar Component
      { path: 'dashboard', component: DashboardComponent },
      { path: 'riders', component: RidersComponent },
      { path: 'rides', component: RidesComponent },
      { path: 'drivers', component: DriversComponent },
      { path: 'vehicle', component: VehicleComponent },
      { path: 'earning-reports', component: EarningReportsComponent },
      { path: 'statement', component: StatementComponent },
      { path: 'review-rating', component: ReviewRatingComponent },
      { path: 'pages', component: PagesComponent },
      
      // navbar component
      { path: 'profile', component: ProfileComponent },
      { path: 'change-password', component: ChangePasswordComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
