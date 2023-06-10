import { Component } from '@angular/core';
import { TableService } from 'src/app/Shared/services/table.service';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss'],
})
export class RidesComponent {
  tableData: any;
  ridesOptions = [
    {
      id: 1,
      displayName: 'All Rides',
      value: 'all',
    },
    {
      id: 2,
      displayName: 'Schedule Rides',
      value: 'schedule',
    },
    {
      id: 3,
      displayName: 'Pending Rides',
      value: 'pending',
    },
    {
      id: 4,
      displayName: 'Cancelled Rides',
      value: 'cancelled',
    }
  ];

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
