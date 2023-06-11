import { Component } from '@angular/core';
import { TableService } from 'src/app/Shared/services/table.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss'],
})
export class StatementComponent {
  today = new Date();
  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  month = this.monthNames[this.today.getMonth()];
  year = this.today.getFullYear();

  statementOptions = [
    {
      id: 1,
      displayName: 'Overall Ride Statement',
      value: 'all',
    },
    {
      id: 2,
      displayName: `Daily Ride Statement - ${this.today.toDateString()}`,
      value: 'schedule',
    },
    {
      id: 3,
      displayName: `Monthly Ride Statement - ${this.month} ${this.year}`,
      value: 'pending',
    },
    {
      id: 4,
      displayName: `Daily Ride Statement - ${this.year}`,
      value: 'cancelled',
    },
  ];

  cardArray = [
    {
      cardIcon: '../../../assets/dashboard icon/person-circle.svg',
      cardIconBGcolor: '#49978b',
      cardContentHeading: 'Total Rides',
      cardContentSubheading: '329',
      cardColor: 'green',
      route: '/riders',
    },
    {
      cardIcon: '../../../assets/dashboard icon/driver-dash.png',
      cardIconBGcolor: '#49978b',
      cardContentHeading: 'Cancelled Rides',
      cardContentSubheading: '500',
      cardColor: 'green',
      route: '/drivers',
    },
    {
      cardIcon: '../../../assets/dashboard icon/car.png',
      cardIconBGcolor: '#49978b',
      cardContentHeading: 'Complete Rides',
      cardContentSubheading: '4',
      cardColor: 'green',
      route: '/vehicle',
    },
    {
      cardIcon: '../../../assets/dashboard icon/money.png',
      cardIconBGcolor: '#49978b',
      cardContentHeading: 'Revenue',
      cardContentSubheading: '500',
      cardColor: 'green',
      route: '/earning-reports',
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

  onSelectedOption(e: any) {
    console.log(e);
  }

  onInputValue(e: any) {
    console.log(e);
  }
}
