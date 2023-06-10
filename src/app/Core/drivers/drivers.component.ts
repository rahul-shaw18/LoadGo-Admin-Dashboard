import { Component } from '@angular/core';
import { TableService } from 'src/app/Shared/services/table.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
export class DriversComponent {
  tableData: any;
  driversOptions = [
    {
      id: 0,
      displayName: 'All drivers',
      value: 'all',
    },
    {
      id: 1,
      displayName: 'Approved Drivers',
      value: 'approved_driver',
    },
    {
      id: 2,
      displayName: 'Unapproved Drivers',
      value: 'schedule',
    },
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
