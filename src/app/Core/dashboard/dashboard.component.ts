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
          cardIcon: 'fa-solid fa-user',
          cardIconBGcolor: '#49978b',
          cardContentHeading: 'Total Riders',
          cardContentSubheading: '329',
          cardColor: 'green',
          route: '/riders',
        },
        {
          cardIcon: 'icon-steering-wheel',
          cardIconBGcolor: '#49978b',
          cardContentHeading: 'Total Drivers',
          cardContentSubheading: '500',
          cardColor: 'green',
          route: '/drivers',
        },
        {
          cardIcon: 'icon-cab',
          cardIconBGcolor: '#49978b',
          cardContentHeading: 'Vehicle',
          cardContentSubheading: '4',
          cardColor: 'green',
          route: '/vehicle',
        },
        {
          cardIcon: 'icon-money',
          cardIconBGcolor: '#49978b',
          cardContentHeading: 'Revenue',
          cardContentSubheading: '500',
          cardColor: 'green',
          route: '/earning-reports',
        },
      ],
    },
    {
      _id: 1,
      groupIcon: 'fa fa-list-alt',
      groupName: 'Ride Statistics',
      card: [
        {
          cardIcon: 'fa-car fa-solid',
          cardIconBGcolor: '#49978b',
          cardContentHeading: 'Total Ride',
          cardContentSubheading: '821',
          cardColor: 'green',
          route: '/rides',
        },
        {
          cardIcon: 'fa-solid fa-circle-xmark',
          cardIconBGcolor: '#49978b',
          cardContentHeading: 'Cancel Ride',
          cardContentSubheading: '104',
          cardColor: 'green',
          route: '/rides',
        },
        {
          cardIcon: 'fa-sharp fa-solid fa-person-biking',
          cardIconBGcolor: '#49978b',
          cardContentHeading: 'Running Ride',
          cardContentSubheading: '500',
          cardColor: 'green',
          route: '/rides',
        },
        {
          cardIcon: 'fa-solid fa-circle-check',
          cardIconBGcolor: '#49978b',
          cardContentHeading: 'Completed',
          cardContentSubheading: '329',
          cardColor: 'green',
          route: '/rides',
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
