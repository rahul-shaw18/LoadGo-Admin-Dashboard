import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Core/home/home.component';
import { AuthenticationComponent } from './Feature/authentication/authentication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AutoCompleteComponent } from './Feature/auto-complete/auto-complete.component';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './Core/dashboard/dashboard.component';
import { RidersComponent } from './Core/riders/riders.component';
import { NavbarComponent } from './Core/navbar/navbar.component';
import { SideNavComponent } from './Core/side-nav/side-nav.component';
import { ProfileComponent } from './Core/navbar/NavbarComponent/profile/profile.component';
import { TableComponent } from './Feature/table/table.component';
import { RidesComponent } from './Core/rides/rides.component';
import { DriversComponent } from './Core/drivers/drivers.component';
import { VehicleComponent } from './Core/vehicle/vehicle.component';
import { EarningReportsComponent } from './Core/earning-reports/earning-reports.component';
import { StatementComponent } from './Core/statement/statement.component';
import { ReviewRatingComponent } from './Core/review-rating/review-rating.component';
import { PagesComponent } from './Core/pages/pages.component';
import { ChangePasswordComponent } from './Core/navbar/NavbarComponent/change-password/change-password.component';
import { AddRiderComponent } from './Core/riders/component/add-rider/add-rider.component';
import { AddDriverComponent } from './Core/drivers/component/add-driver/add-driver.component';
import { AddVehicleComponent } from './Core/vehicle/component/add-vehicle/add-vehicle.component';
import { AddPagesComponent } from './Core/pages/component/add-pages/add-pages.component';
import { DocumentsComponent } from './Core/drivers/component/documents/documents.component';
import { TripsComponent } from './Core/drivers/component/trips/trips.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticationComponent,
    AutoCompleteComponent,
    DashboardComponent,
    RidersComponent,
    NavbarComponent,
    SideNavComponent,
    ProfileComponent,
    TableComponent,
    RidesComponent,
    DriversComponent,
    VehicleComponent,
    EarningReportsComponent,
    StatementComponent,
    ReviewRatingComponent,
    PagesComponent,
    ChangePasswordComponent,
    AddRiderComponent,
    AddDriverComponent,
    AddVehicleComponent,
    AddPagesComponent,
    DocumentsComponent,
    TripsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
