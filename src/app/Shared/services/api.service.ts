import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BASE_URL = `https://loadgo.in/loadgo/`;

  constructor(private http: HttpClient) {}

  // Drivers start
  getDriver() {
    return this.http.get(`${this.BASE_URL}getDriver.php`);
  }

  patchDriverDetails(payload: any) {
    return this.http.patch(`${this.BASE_URL}patchDriver.php`, payload);
  }

  // Drivers end

  // Riders start

  getRiders(filter?: any) {
    if (filter) {
      return this.http.get(`${this.BASE_URL}getAllRides.php${filter}`);
    } else return this.http.get(`${this.BASE_URL}getAllRides.php`);
  }

  // Riders ends

  // Users Start
  getUsers() {
    return this.http.get(`${this.BASE_URL}getUser.php`);
  }
  // Users ends
}
