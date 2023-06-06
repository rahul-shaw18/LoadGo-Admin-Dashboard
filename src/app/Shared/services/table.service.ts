import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface PeriodicElement {
  rideId: number;
  riderName: string;
  driverName: string;
  pickDropAddress: string;
  date: string;
  rideFare: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class TableService {
  ELEMENT_DATA: PeriodicElement[] = [
    {
      rideId: 1,
      riderName: 'Hydrogen',
      driverName: '1.0079',
      pickDropAddress: 'H',
      date: '12',
      rideFare: '',
      status: '',
    },
    {
      rideId: 2,
      riderName: 'Helium',
      driverName: '4.0026',
      pickDropAddress: 'He',
      date: '12',
      rideFare: '',
      status: '',
    },
    {
      rideId: 3,
      riderName: 'Lithium',
      driverName: '6.941',
      pickDropAddress: 'Li',
      date: '12',
      rideFare: '',
      status: '',
    },
    {
      rideId: 4,
      riderName: 'Beryllium',
      driverName: '9.0122',
      pickDropAddress: 'Be',
      date: '12',
      rideFare: '',
      status: '',
    },
    {
      rideId: 5,
      riderName: 'Boron',
      driverName: '10.811',
      pickDropAddress: 'B',
      date: '12',
      rideFare: '',
      status: '',
    },
    {
      rideId: 6,
      riderName: 'Carbon',
      driverName: '12.0107',
      pickDropAddress: 'C',
      date: '12',
      rideFare: '',
      status: '',
    },
    {
      rideId: 7,
      riderName: 'Nitrogen',
      driverName: '14.0067',
      pickDropAddress: 'N',
      date: '12',
      rideFare: '',
      status: '',
    },
    {
      rideId: 8,
      riderName: 'Oxygen',
      driverName: '15.9994',
      pickDropAddress: 'O',
      date: '12',
      rideFare: '',
      status: '',
    },
    {
      rideId: 9,
      riderName: 'Fluorine',
      driverName: '18.9984',
      pickDropAddress: 'F',
      date: '12',
      rideFare: '',
      status: '',
    },
    {
      rideId: 10,
      riderName: 'Neon',
      driverName: '20.1797',
      pickDropAddress: 'Ne',
      date: '12',
      rideFare: '',
      status: '',
    },
  ];

  apiUrl = '';
  constructor(private http: HttpClient) {}
  getTableData() {
    return this.ELEMENT_DATA;
  }
}
