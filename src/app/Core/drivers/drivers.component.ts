import { Component } from '@angular/core';
import { DialogService } from 'src/app/Shared/services/dialog.service';
import { TableService } from 'src/app/Shared/services/table.service';
import { AddDriverComponent } from './component/add-driver/add-driver.component';

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

  constructor(
    private tableService: TableService,
    private dialogService: DialogService
  ) {}

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
  addDriver() {
    this.dialogService.openDialog(AddDriverComponent);
  }
}
