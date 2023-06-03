import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Core/home/home.component';
import { AuthenticationComponent } from './Feature/authentication/authentication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AutoCompleteComponent } from './Feature/auto-complete/auto-complete.component';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './Core/dashboard/dashboard.component';
import { RidersComponent } from './Core/riders/riders.component';
import { NavbarComponent } from './Core/navbar/navbar.component';
import { SideNavComponent } from './Core/side-nav/side-nav.component';
import { ProfileComponent } from './Core/navbar/NavbarComponent/profile/profile.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
