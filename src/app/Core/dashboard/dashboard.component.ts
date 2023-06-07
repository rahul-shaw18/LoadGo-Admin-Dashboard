import { Component, ViewChild, OnInit } from '@angular/core';

import { TableService } from 'src/app/Shared/services/table.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  cardArray = [
    {
      _id: 0,
      groupIcon: 'fa fa-sitemap',
      groupName: 'Site Statistics',
      card: [
        {
          cardIcon: '../../../assets/dashboard icon/person-circle.svg',
          cardIconBGcolor: '#49978b',
          cardContentHeading: 'Total Riders',
          cardContentSubheading: '329',
          cardColor: 'green',
        },
        {
          cardIcon: '../../../assets/dashboard icon/driver-dash.png',
          cardIconBGcolor: '#49978b',
          cardContentHeading: 'Total Drivers',
          cardContentSubheading: '500',
          cardColor: 'green',
        },
        {
          cardIcon: '../../../assets/dashboard icon/car.png',
          cardIconBGcolor: '#49978b',
          cardContentHeading: 'Vehicle Type',
          cardContentSubheading: '4',
          cardColor: 'green',
        },
        {
          cardIcon: '../../../assets/dashboard icon/money.png',
          cardIconBGcolor: '#49978b',
          cardContentHeading: 'Total Drivers',
          cardContentSubheading: '500',
          cardColor: 'green',
        },
      ],
    },
    {
      _id: 1,
      groupIcon: 'fa fa-list-alt',
      groupName: 'Ride Statistics',
      card: [
        {
          cardIcon: '../../../assets/dashboard icon/driver-dash.png',
          cardIconBGcolor: '#49978b',
          cardContentHeading: 'Total Ride',
          cardContentSubheading: '821',
          cardColor: 'green',
        },
        {
          cardIcon: '../../../assets/dashboard icon/car.png',
          cardIconBGcolor: '#49978b',
          cardContentHeading: 'Cancel Ride',
          cardContentSubheading: '104',
          cardColor: 'green',
        },
        {
          cardIcon: '../../../assets/dashboard icon/money.png',
          cardIconBGcolor: '#49978b',
          cardContentHeading: 'Running Ride',
          cardContentSubheading: '500',
          cardColor: 'green',
        },
        {
          cardIcon: '../../../assets/dashboard icon/person-circle.svg',
          cardIconBGcolor: '#49978b',
          cardContentHeading: 'Completed',
          cardContentSubheading: '329',
          cardColor: 'green',
        },
      ],
    },
  ];

  tableData: any;

  constructor(private tableService: TableService) {}

  ngOnInit() {
    this.tableData = this.tableService.getTableData();
  }

  // table
  displayedColumns: string[] = [
    'rideId',
    'riderName',
    'driverName',
    'pickDropAddress',
    'date',
    'rideFare',
    'status',
  ];

}
