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
          cardIconBGcolor: '#fff',
          cardContentHeading: 'Total Riders',
          cardContentSubheading: '329',
          cardColor: '#884A39',
          route: '/riders',
        },
        {
          cardIcon: 'icon-steering-wheel',
          cardIconBGcolor: '#fff',
          cardContentHeading: 'Total Drivers',
          cardContentSubheading: '500',
          cardColor: '#cc5500',
          route: '/drivers',
        },
        {
          cardIcon: 'icon-cab',
          cardIconBGcolor: '#fff',
          cardContentHeading: 'Vehicle',
          cardContentSubheading: '4',
          cardColor: '#9acd32',
          route: '/vehicle',
        },
        {
          cardIcon: 'icon-money',
          cardIconBGcolor: '#fff',
          cardContentHeading: 'Revenue',
          cardContentSubheading: '500',
          cardColor: '#4cbb17',
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
          cardIconBGcolor: '#fff',
          cardContentHeading: 'Total',
          cardContentSubheading: '821',
          cardColor: '#29ab87',
          route: '/rides',
        },
        {
          cardIcon: 'fa-solid fa-circle-xmark',
          cardIconBGcolor: '#fff',
          cardContentHeading: 'Cancelled',
          cardContentSubheading: '104',
          cardColor: '#FF0000',
          route: '/rides',
        },
        {
          cardIcon: 'fa-sharp fa-solid fa-person-biking',
          cardIconBGcolor: '#fff',
          cardContentHeading: 'Running',
          cardContentSubheading: '500',
          cardColor: 'green',
          route: '/rides',
        },
        {
          cardIcon: 'fa-solid fa-circle-check',
          cardIconBGcolor: '#fff',
          cardContentHeading: 'Completed',
          cardContentSubheading: '329',
          cardColor: '#228b22',
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
