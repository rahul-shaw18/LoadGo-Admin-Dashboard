import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = `https://loadgo.in/loadgo/`

  constructor(private http:HttpClient) { }

  getDriver() {
    return this.http.get(`${this.BASE_URL}getDriver.php`)
  }

  getRiders(filter?: any) {
    if(filter) {return this.http.get(`${this.BASE_URL}getAllRides.php${filter}`)}
    else return this.http.get(`${this.BASE_URL}getAllRides.php`)
  }

  patchDriverDetails(payload:any) {
    return this.http.patch(`${this.BASE_URL}patchDriver.php`,payload)
  }
}
