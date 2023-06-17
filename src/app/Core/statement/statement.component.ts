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
      cardIcon: 'fa-car fa-solid',
      cardIconBGcolor: '#fff',
      cardContentHeading: 'Total',
      cardContentSubheading: '329',
      cardColor: '#29ab87',
    },
    {
      cardIcon: 'fa-circle-xmark fa-solid',
      cardIconBGcolor: '#fff',
      cardContentHeading: 'Cancelled',
      cardContentSubheading: '500',
      cardColor: ' #FF0000',
    },
    {
      cardIcon: 'fa-circle-check fa-solid',
      cardIconBGcolor: '#fff',
      cardContentHeading: 'Complete',
      cardContentSubheading: '4',
      cardColor: '#228b22',
    },
    {
      cardIcon: 'icon-money',
      cardIconBGcolor: '#fff',
      cardContentHeading: 'Revenue',
      cardContentSubheading: '500',
      cardColor: '#cc7722',
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
