import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from 'src/app/Shared/services/table.service';
import { filter } from './../../Shared/interface/filter-interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: any;
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
    this.getAll();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

  getAll() {
    this.tableData = this.tableService.getTableData();
    this.dataSource = new MatTableDataSource(this.tableData);
  }
  onFilter(e: any) {
    const filterValue = (e.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }
}
