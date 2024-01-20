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

  getRiders() {
    return this.http.get(`${this.BASE_URL}getAllRides.php`)
  }
}
